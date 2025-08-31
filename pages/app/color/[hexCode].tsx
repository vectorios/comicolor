// pages/app/color/[hexCode].tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../styles/ColorMonograph.module.css';
// We'll reuse the creation card style
import discoverStyles from '../../../styles/Discover.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for colors, this would be fetched from an API
const colorDatabase = {
  'FF5733': {
    name: 'Crimson Blaze',
    owner: 'Vectorios',
    genesisDate: '2023-01-20',
    marketValue: 150,
    creations: [
      { id: 'cr01', title: 'Dusk on the Frontier', imageUrl: 'https://placehold.co/600x400/FF5733/FFFFFF?text=Palette' },
    ]
  },
  '8E44AD': {
      name: 'Royal Amethyst',
      owner: 'Vectorios',
      genesisDate: '2023-02-11',
      marketValue: 450,
      creations: [
        { id: 'cr01', title: 'Dusk on the Frontier', imageUrl: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Palette' },
        { id: 'cr06', title: 'Violet Night', imageUrl: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Art' },
      ]
  }
};

// Helper function to determine text contrast
const getTextColorForBackground = (hexColor: string) => {
  if (!hexColor) return styles.lightText;
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? styles.darkText : styles.lightText;
};

const ColorMonographPage = () => {
    const router = useRouter();
    const { hexCode } = router.query;
    
    // Ensure hexCode is a string before using it
    const hex = typeof hexCode === 'string' ? hexCode.toUpperCase() : '';
    const colorData = colorDatabase[hex];

    if (!colorData) {
        return <div>Loading or Color not found...</div>;
    }

    const fullHex = `#${hex}`;
    const textColorClass = getTextColorForBackground(hex);

    return (
        <>
            <Head>
                <title>{colorData.name} ({fullHex}) - Color Monograph</title>
            </Head>
            <div className={styles.pageContainer}>
                <header className={styles.hero} style={{ backgroundColor: fullHex }}>
                    <h1 className={textColorClass}>{colorData.name}</h1>
                    <p className={textColorClass}>{fullHex}</p>
                </header>

                <main className={styles.mainContent}>
                    <div className={styles.leftColumn}>
                        <section className={styles.section}>
                            <h2>Core Data</h2>
                            <div className={styles.statGrid}>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Current Guardian</div>
                                    <div className={styles.statValue}>
                                        <Link href={`/app/users/${colorData.owner}`} legacyBehavior><a className={styles.ownerLink}>{colorData.owner}</a></Link>
                                    </div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Genesis Date</div>
                                    <div className={styles.statValue}>{colorData.genesisDate}</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Estimated Market Value</div>
                                    <div className={styles.statValue}>{colorData.marketValue} PRISMS</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statLabel}>Creations Featuring</div>
                                    <div className={styles.statValue}>{colorData.creations.length}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <aside className={styles.rightColumn}>
                        <section className={styles.section}>
                            <h2>Featured In</h2>
                            <div className={styles.creationsGrid}>
                                {colorData.creations.map(creation => (
                                    <Link key={creation.id} href={`/app/creation/${creation.id}`} legacyBehavior>
                                        <a className={discoverStyles.creationCard}>
                                            <div className={discoverStyles.cardImage}>
                                                 <img src={creation.imageUrl} alt={creation.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </aside>
                </main>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
ColorMonographPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default ColorMonographPage;