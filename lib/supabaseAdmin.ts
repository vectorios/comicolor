import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Supabase Service Role Key is missing from .env.local');
}

// Ce client est un super-utilisateur qui ignore les politiques RLS.
// À n'utiliser QUE dans les API routes côté serveur.
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);