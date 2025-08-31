// pages/app/registry/public-domain.tsx

import React, { ReactElement, useState, useEffect } from 'react'; // Import useState and useEffect
import Head from 'next/head';
import styles from '../../../styles/PublicDomain.module.css';
import AppLayout from '../../../components/app/AppLayout';

const generateRandomHex = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const PublicDomainPage = () => {
  // 1. Initialize state with an empty array. 
  // This ensures the server and initial client render are identical (and empty).
  const [publicColors, setPublicColors] = useState<{ hex: string }[]>([]);

  // 2. Use useEffect to generate colors ONLY on the client-side, after the component has mounted.
  useEffect(() => {
    const generatedColors = Array.from({ length: 18 }, () => ({ hex: generateRandomHex() }));
    setPublicColors(generatedColors);
  }, []); // The empty dependency array [] ensures this runs only once on mount.

  const handleClaim = (hex: string) => {
    alert(`Attempting to claim color ${hex}!`);
  };

  return (
    <>
      <Head>
        <title>Public Domain - The Great Registry</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Public Domain</h1>
          <p className={styles.subtitle}>
            This is the frontier. These unowned colors are awaiting their first Guardian. 
            Claim one to begin its history.
          </p>
        </header>

        <div className={styles.colorGrid}>
          {/* 3. Map over the state variable which is now safely populated on the client */}
          {publicColors.map((color) => (
            <div key={color.hex} className={styles.colorCard}>
              <div className={styles.swatch} style={{ backgroundColor: color.hex }}></div>
              <div className={styles.info}>
                <div className={styles.hexCode}>{color.hex}</div>
                <button 
                  className={styles.claimButton} 
                  onClick={() => handleClaim(color.hex)}
                >
                  Claim Color
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