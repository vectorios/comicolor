import React, { ReactElement, useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../../styles/PublicDomain.module.css';
import AppLayout from '../../../components/app/AppLayout';
import { supabase } from '../../../lib/supabaseClient';
// NOTE: L'import direct de 'Paddle' est volontairement omis ici.

interface PublicColor {
    hex_code: string;
    name: string;
    influence_score: number;
    is_freebie: boolean;
}

// Déclare à TypeScript que la propriété `Paddle` peut exister sur l'objet `window`.
// C'est nécessaire car la librairie Paddle.js s'attache elle-même à `window`.
declare global {
  interface Window {
    Paddle: any;
  }
}

const PublicDomainPage = () => {
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
        // --- LOGIQUE POUR LA COULEUR GRATUITE ---
        const response = await fetch('/api/colors/claim', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hexCode: color.hex_code }),
        });
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            fetchPublicColors(); // Rafraîchir la liste
        } else {
            alert(`Error: ${data.message}`);
        }
    } else {
        // --- LOGIQUE POUR LA COULEUR PAYANTE AVEC PADDLE ---
        if (window.Paddle) {
            // Dans une vraie application, cet email viendrait des informations de l'utilisateur connecté.
            // Il faudrait le récupérer via un contexte ou une librairie de state management.
            const userEmailForPaddle = "myiverydel@example.com"; // Placeholder

            window.Paddle.Checkout.open({
                items: [{
                    // IMPORTANT: Remplacez ceci par l'ID de votre prix créé dans le dashboard Paddle Sandbox
                    priceId: 'pri_01k40q5b45yg862085hyr8415n', 
                    quantity: 1
                }],
                customer: {
                    email: userEmailForPaddle,
                },
                customData: {
                    // On passe les infos nécessaires au webhook pour qu'il sache quelle couleur attribuer
                    hex_code: color.hex_code,
                }
            });
        } else {
            alert("Payment system is not available. Please try again later.");
            console.error("window.Paddle is not defined. It may have failed to initialize in _app.tsx.");
        }
    }

    setClaimingId(null);
  };

  if (loading && colors.length === 0) {
    // Affiche un message de chargement plus centré
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

PublicDomainPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default PublicDomainPage;