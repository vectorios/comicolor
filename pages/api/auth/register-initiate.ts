// pages/api/auth/register-initiate.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Sélectionne une couleur de départ (Genesis Color) pour un nouvel utilisateur,
 * en se basant sur son archétype pour une expérience personnalisée.
 * @param archetype L'archétype du Gardien (Creator, Strategist, Archivist).
 * @returns Un objet contenant le hex_code et le nom de la couleur choisie.
 */
async function selectGenesisColor(archetype: string) {
    let query = supabaseAdmin
        .from('colors')
        .select('hex_code, name')
        .eq('status', 'public_domain')
        .limit(100); // On prend un échantillon de 100 couleurs pour la sélection

    // On personnalise la requête pour chaque archétype
    if (archetype === 'Creator') {
        // Les Créateurs préfèrent les couleurs vives et saturées (score d'influence élevé)
        query = query.order('influence_score', { ascending: false });
    }
    if (archetype === 'Archivist') {
        // Les Archivistes préfèrent les couleurs subtiles et historiques (score d'influence faible)
        query = query.lt('influence_score', 300).order('influence_score', { ascending: true });
    }
    if (archetype === 'Strategist') {
        // Les Stratèges préfèrent les couleurs rares et potentiellement précieuses (score d'influence élevé)
        query = query.gt('influence_score', 700).order('influence_score', { ascending: false });
    }

    const { data, error } = await query;

    if (error || !data || data.length === 0) {
        console.error("Genesis Color selection failed for archetype, using fallback.", error);
        // Plan B : si la sélection spécifique échoue, on prend n'importe quelle couleur disponible
        const { data: fallbackData, error: fallbackError } = await supabaseAdmin
            .from('colors')
            .select('hex_code, name')
            .eq('status', 'public_domain')
            .limit(1);
        
        if (fallbackError) throw fallbackError;
        return fallbackData?.[0];
    }
    
    // On choisit une couleur au hasard parmi les 100 meilleures correspondances trouvées
    return data[Math.floor(Math.random() * data.length)];
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    if (!JWT_SECRET) {
        return res.status(500).json({ message: 'JWT Secret not configured' });
    }

    const { firstName, lastName, username, email, password, country, archetype, paymentId } = req.body;
    
    // Validation complète des données reçues
    if (!username || !email || !password || !paymentId || !archetype || !firstName || !lastName || !country) {
        return res.status(400).json({ message: 'Incomplete initiation data. Please start over.' });
    }

    try {
        // Étape 1: Sélectionner la couleur de départ AVANT de créer l'utilisateur
        const genesisColor = await selectGenesisColor(archetype);
        if (!genesisColor) {
            return res.status(503).json({ message: 'The Verse is currently out of available colors. Please try again later.' });
        }
        
        // Étape 2: Hacher le mot de passe et créer l'utilisateur
        const password_hash = await bcrypt.hash(password, 10);
        const { data: newUser, error: insertError } = await supabaseAdmin
            .from('users')
            .insert({ username, email, password_hash, first_name: firstName, last_name: lastName, country, archetype })
            .select('id, username')
            .single();

        if (insertError) {
            // Gérer les erreurs de duplication de manière plus claire
            if (insertError.code === '23505') { // Code d'erreur PostgreSQL pour violation d'unicité
                return res.status(409).json({ message: 'A Guardian with that name or email already exists.' });
            }
            throw insertError;
        }

        // Étape 3: Assigner la couleur au nouvel utilisateur
        const { error: updateColorError } = await supabaseAdmin
            .from('colors')
            .update({ owner_id: newUser.id, status: 'owned' })
            .eq('hex_code', genesisColor.hex_code);

        if (updateColorError) throw updateColorError;

        // (Future logique : créditer 100 PRISMS dans une table 'wallets' associée à newUser.id)

        // Étape 4: Créer la session pour connecter automatiquement l'utilisateur
        const token = jwt.sign({ userId: newUser.id, username: newUser.username }, JWT_SECRET, { expiresIn: '7d' });
        res.setHeader('Set-Cookie', cookie.serialize('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        }));

        // Étape 5: Renvoyer toutes les infos nécessaires au front-end pour la page de bienvenue
        return res.status(201).json({ 
            message: 'Pact sealed. Welcome, Guardian.', 
            user: newUser,
            genesisColor: { 
                name: genesisColor.name, 
                hex: genesisColor.hex_code 
            }
        });

    } catch (error: any) {
        console.error("Initiation API Error:", error.message);
        return res.status(500).json({ message: 'An internal error occurred during ratification.' });
    }
}