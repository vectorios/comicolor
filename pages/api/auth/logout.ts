// pages/api/auth/logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as cookie from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Pour déconnecter un utilisateur, nous allons supprimer le cookie en lui
  // donnant une date d'expiration dans le passé (maxAge: -1).
  res.setHeader('Set-Cookie', cookie.serialize('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: -1, // La clé est ici : le cookie expire immédiatement
    path: '/',
  }));

  return res.status(200).json({ message: 'Logged out successfully' });
}