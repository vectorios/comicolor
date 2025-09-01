import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '../../../lib/supabaseAdmin'; // On utilise l'admin pour l'INSERT
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  if (!JWT_SECRET) {
    return res.status(500).json({ message: 'JWT Secret not configured' });
  }

  const { firstName, lastName, username, email, password, country, paymentId } = req.body;

  // 1. Validation des données
  if (!firstName || !lastName || !username || !email || !password || !country) {
    return res.status(400).json({ message: 'All account fields are required.' });
  }
  if (!paymentId) {
    return res.status(400).json({ message: 'Payment information is missing. Registration cannot be completed.' });
  }

  try {
    // 2. Vérifier si l'utilisateur ou l'email existe déjà
    const { data: existingUsers } = await supabaseAdmin
      .from('users')
      .select('id')
      .or(`username.eq.${username},email.eq.${email}`);
      
    if (existingUsers && existingUsers.length > 0) {
      return res.status(409).json({ message: 'Username or email already exists.' });
    }
    
    // 3. Hacher le mot de passe
    const password_hash = await bcrypt.hash(password, 10);

    // 4. Insérer le nouvel utilisateur. On utilise le client Admin car RLS est actif.
    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('users')
      .insert({ username, email, password_hash, first_name: firstName, last_name: lastName, country })
      .select('id, username')
      .single();

    if (insertError || !newUser) {
      throw new Error(insertError?.message || 'Failed to create user in database.');
    }

    // Ici, nous devrions aussi :
    // 1. Attribuer la couleur du pack de démarrage à l'utilisateur.
    // 2. Créditer 100 PRISMS sur son compte (nécessite une table "wallets").
    // Pour l'instant, ces étapes sont omises pour se concentrer sur l'inscription.

    // 5. Créer un token de session et un cookie
    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.setHeader('Set-Cookie', cookie.serialize('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    }));

    return res.status(201).json({ message: 'User created successfully', user: newUser });

  } catch (error: any) {
    console.error("Registration API Error:", error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}