import { NextApiRequest, NextApiResponse } from 'next';
import { Paddle, EventName } from 'paddle-sdk';
import getRawBody from 'raw-body';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

const paddle = new Paddle(process.env.PADDLE_API_KEY, { environment: 'sandbox' });
const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

// IMPORTANT: On désactive le body parser de Next.js pour cette route
// car Paddle a besoin du "raw body" pour vérifier la signature.
export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    if (!webhookSecret) {
        return res.status(500).json({ message: 'Webhook secret not configured' });
    }

    const signature = req.headers['paddle-signature'] as string;
    const rawBody = await getRawBody(req);

    try {
        // 1. Vérifier la signature du webhook pour s'assurer qu'il vient bien de Paddle
        const event = paddle.webhooks.unmarshal(rawBody, webhookSecret, signature);

        // 2. Gérer l'événement 'transaction.completed'
        if (event?.eventName === 'transaction.completed') {
            console.log('✅ Transaction completed event received:', event.data);

            const { custom_data, customer } = event.data;
            const hexCode = custom_data?.hex_code as string;
            const userEmail = customer?.email as string;

            if (!hexCode || !userEmail) {
                throw new Error('Missing hex_code or user_email in webhook payload');
            }

            // 3. Trouver l'utilisateur dans notre base de données par son email
            const { data: user, error: userError } = await supabaseAdmin
                .from('users').select('id').eq('email', userEmail).single();
            if (userError || !user) throw new Error(`User not found for email: ${userEmail}`);
            
            // 4. Mettre à jour la couleur pour l'attribuer à l'utilisateur
            const { error: updateError } = await supabaseAdmin
                .from('colors')
                .update({ owner_id: user.id, status: 'owned' })
                .eq('hex_code', hexCode)
                .eq('status', 'public_domain');
            
            if (updateError) throw updateError;

            console.log(`🎨 Color ${hexCode} successfully assigned to user ${user.id}`);
        }

        // 5. Renvoyer une réponse 200 OK à Paddle pour dire que tout va bien
        return res.status(200).send('Webhook received');

    } catch (error: any) {
        console.error('Webhook Error:', error.message);
        return res.status(400).send(`Webhook error: ${error.message}`);
    }
}