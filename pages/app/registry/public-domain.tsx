import React, { ReactElement, useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../../styles/PublicDomain.module.css';
import AppLayout from '../../../components/app/AppLayout';
import { supabase } from '../../../lib/supabaseClient';
import { GetServerSideProps } from 'next';
import { jwtVerify } from 'jose';

interface PublicColor {
    hex_code: string;
    name: string;
    influence_score: number;
    is_freebie: boolean;
}

interface PageProps {
  user: {
    email: string; // Nous allons récupérer l'email du serveur
  } | null;
}

declare global {
  interface Window {
    Paddle: any;
  }
}

const PublicDomainPage = ({ user }: PageProps) => {
  const [colors, setColors] = useState<PublicColor[]>([]);
  const [loading, setLoading] = useState(true);
  const [claimingId, setClaimingId] = useState<string | null>(null);

  const fetchPublicColors = async () => {
    setLoading(true);
    const { data, error } = await supabase
        .from('colors')
        .select('hex_code, name, influence_score, is_freebie')
        .eq('status', 'public_domain')
        .limit(24);
    
    if (data) setColors(data);
    if (error) console.error("Error fetching colors:", error);
    setLoading(false);
  };

  useEffect(() => {
    fetchPublicColors();
  }, []);

  const handleClaim = async (color: PublicColor) => {
    setClaimingId(color.hex_code);

    if (color.is_freebie) {
        const response = await fetch('/api/colors/claim', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hexCode: color.hex_code }),
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            fetchPublicColors();
        } else {
            alert(`Error: ${data.message}`);
        }
    } else {
        // Logique payante avec Paddle
        if (!user?.email) {
            alert("Could not find your user information. Please try logging in again.");
            setClaimingId(null);
            return;
        }

        if (window.Paddle) {
            window.Paddle.Checkout.open({
                items: [{
                    priceId: 'pri_01k40q5b45yg862085hyr8415n',
                    quantity: 1
                }],
                customer: {
                    email: user.email,
                },
                customData: {
                    hex_code: color.hex_code,
                }
            });
        } else {
            alert("Payment system is not available. Please try again later.");
            console.error("window.Paddle is not defined.");
        }
    }

    setClaimingId(null);
  };

  if (loading && colors.length === 0) {
    return <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'}}>Loading the frontier...</div>;
  }

  return (
    <>
      <Head><title>Public Domain - The Great Registry</title></Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Public Domain</h1>
          <p className={styles.subtitle}>
            This is the frontier. These unowned colors are awaiting their first Guardian. Your first is free.
          </p>
        </header>

        <div className={styles.colorGrid}>
          {colors.map((color) => (
            <div key={color.hex_code} className={styles.colorCard}>
              <div className={styles.swatch} style={{ backgroundColor: `#${color.hex_code}` }}></div>
              <div className={styles.info}>
                <div className={styles.hexCode}>{color.name}</div>
                <small style={{color: '#a0a0b0', display: 'block'}}>#{color.hex_code} | Influence: {color.influence_score}</small>
                {color.is_freebie && <span className={styles.freeTag}>FREE</span>}
                <button 
                  className={styles.claimButton} 
                  onClick={() => handleClaim(color)}
                  disabled={claimingId === color.hex_code}
                >
                  {claimingId === color.hex_code ? 'Processing...' : 'Claim Color'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// On ajoute getServerSideProps pour récupérer l'email de l'utilisateur connecté
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const token = req.cookies.auth_token;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!token || !JWT_SECRET) {
    // L'utilisateur n'est pas connecté, le middleware le redirigera
    return { props: { user: null } };
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    
    // On doit maintenant récupérer l'email depuis la DB car il n'est pas dans le token
    const { data: user, error } = await supabase
      .from('users')
      .select('email')
      .eq('id', payload.userId)
      .single();

    if (error || !user) {
        throw new Error("User not found for token ID");
    }

    return { props: { user: { email: user.email } } };
  } catch (error) {
    console.error("getServerSideProps Error on Public Domain:", error);
    return { props: { user: null } };
  }
};

PublicDomainPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default PublicDomainPage;