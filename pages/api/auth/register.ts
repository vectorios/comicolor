import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie'; // L'import corrigé

// Assurez-vous d'avoir une clé secrète pour les tokens dans votre fichier .env.local
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in your environment variables. Please add it to .env.local");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, email, password } = req.body;

  // 1. Validation des données
  if (!username || !email || !password || password.length < 8) {
    return res.status(400).json({ message: 'Invalid input. Password must be at least 8 characters long.' });
  }

  try {
    // 2. Vérifier si l'utilisateur ou l'email existe déjà
    const { data: existingUsers, error: checkError } = await supabase
      .from('users')
      .select('id')
      .or(`username.eq.${username},email.eq.${email}`);
      
    if (checkError) {
        throw new Error(checkError.message);
    }
      
    if (existingUsers && existingUsers.length > 0) {
      return res.status(409).json({ message: 'Username or email already exists.' });
    }
    
    // 3. Hacher le mot de passe
    const password_hash = await bcrypt.hash(password, 10);

    // 4. Insérer le nouvel utilisateur dans la base de données
    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert({ username, email, password_hash })
      .select('id, username')
      .single();

    if (insertError || !newUser) {
      throw new Error(insertError?.message || 'Failed to create user.');
    }

    // 5. Créer un token de session (JWT)
    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '7d' } // Le token est valide pour 7 jours
    );

    // 6. Définir le token dans un cookie httpOnly sécurisé
    res.setHeader('Set-Cookie', cookie.serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 semaine
      path: '/',
    }));

    // 7. Renvoyer une réponse de succès
    return res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, username: newUser.username } });

  } catch (error: any) {
    // Le `any` ici permet de capturer n'importe quel type d'erreur
    console.error("Registration API Error:", error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}