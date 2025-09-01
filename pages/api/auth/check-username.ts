// pages/api/auth/check-username.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { username } = req.body;

    if (!username || typeof username !== 'string' || username.length < 3) {
        return res.status(400).json({ available: false, message: 'Invalid username' });
    }

    try {
        const { data, error } = await supabase
            .from('users')
            .select('username')
            .eq('username', username)
            .maybeSingle();

        if (error) throw error;

        if (data) {
            return res.status(200).json({ available: false, message: 'Name already etched in history.' });
        } else {
            return res.status(200).json({ available: true, message: 'Name is untaken. It is yours to claim.' });
        }

    } catch (error: any) {
        return res.status(500).json({ available: false, message: error.message });
    }
}