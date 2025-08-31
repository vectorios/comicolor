// pages/api/colors/claim.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') { return res.status(405).json({ message: 'Method Not Allowed' }); }
    if (!JWT_SECRET) { return res.status(500).json({ message: 'JWT secret not configured' }); }

    try {
        const token = req.cookies.auth_token;
        if (!token) { return res.status(401).json({ message: 'Authentication required' }); }
        
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        const userId = payload.userId as string;
        if (!userId) { return res.status(401).json({ message: 'Invalid token payload' }); }

        const { hexCode } = req.body;
        if (!hexCode) { return res.status(400).json({ message: 'Hex code is required' }); }

        const { data: colorToClaim, error: fetchError } = await supabaseAdmin
            .from('colors').select('*').eq('hex_code', hexCode).eq('status', 'public_domain').maybeSingle();

        if (fetchError) throw fetchError;
        if (!colorToClaim) { return res.status(404).json({ message: 'This color is not available to be claimed.' }); }

        if (!colorToClaim.is_freebie) {
            return res.status(402).json({ message: 'This color is not free. Payment logic not implemented yet.' });
        } else {
            const { count, error: countError } = await supabaseAdmin
                .from('colors').select('hex_code', { count: 'exact', head: true }).eq('owner_id', userId);
            
            if (countError) throw countError;
            if (count !== null && count > 0) {
                return res.status(403).json({ message: 'You have already claimed your one free color.' });
            }
        }

        const { data: updatedColor, error: updateError } = await supabaseAdmin
            .from('colors').update({ owner_id: userId, status: 'owned' }).eq('hex_code', hexCode).select().single();

        if (updateError) throw updateError;
        return res.status(200).json({ message: `Successfully claimed ${updatedColor.name}!`, color: updatedColor });

    } catch (error: any) {
        console.error("Claim API Error:", error);
        if (error.name === 'JWTExpired' || error.name === 'JWSInvalid') {
             return res.status(401).json({ message: 'Authentication failed' });
        }
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}