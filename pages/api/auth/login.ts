// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in your environment variables.");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // 1. Trouver l'utilisateur par son email
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id, username, password_hash')
      .eq('email', email)
      .single();

    // Si l'utilisateur n'est pas trouvé, renvoyer une erreur générique pour des raisons de sécurité
    if (!user || userError) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // 2. Comparer le mot de passe fourni avec le hash stocké
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // 3. Si tout est valide, créer un token JWT et un cookie (comme pour l'inscription)
    const token = jwt.sign(
      { userId: user.id, username: user.username },
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

    return res.status(200).json({ message: 'Logged in successfully', user: { id: user.id, username: user.username } });

  } catch (error: any) {
    console.error("Login API Error:", error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}