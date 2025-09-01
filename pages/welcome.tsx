// pages/welcome.tsx
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Welcome.module.css';

const WelcomePage = () => {
    const router = useRouter();
    const { colorName, colorHex, username } = router.query;
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Sécurité : si les paramètres sont manquants, on affiche un message de chargement
    if (!colorName || !colorHex || !username) {
        return <div>Loading your decree...</div>;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Citizenship Decree - Welcome to ColorVerse</title>
                {/* On enlève la police VT323 pour cette page, pour un look plus officiel */}
            </Head>
            <div className={styles.decree}>
                <h1 className={styles.logo}>ColorVerse</h1>
                <p className={styles.mainText}>
                    Be it known that on this day, {date},
                    the individual who has passed the Scrutiny, is hereby granted
                    the title of Guardian of the Verse under the chosen name
                </p>
                <span className={styles.guardianName}>{decodeURIComponent(username as string)}</span>
                
                <h2 className={styles.assetsTitle}>Assets Granted</h2>

                <div className={styles.assetContainer}>
                    <div className={styles.colorAsset}>
                        <h3>Your Genesis Color</h3>
                        <div className={styles.swatch} style={{ backgroundColor: `#${colorHex}` }}></div>
                        <p className={styles.colorName}>{decodeURIComponent(colorName as string)}</p>
                        <p className={styles.hexCode}>#{colorHex}</p>
                    </div>
                    <div>
                        <h3>Wallet Balance</h3>
                        <p className={styles.walletAsset}>100 PRISMS</p>
                    </div>
                </div>

                <Link href="/app/dashboard" legacyBehavior>
                    <a className={styles.button}>Enter Your Guardian's Desk</a>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;