// pages/app/factions/index.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Factions.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for factions
const mockFactions = [
  { id: 'f01', slug: 'chromatic-order', name: 'The Chromatic Order', motto: 'Uniting the spectrum, one color at a time.', memberCount: 125, emblemColor: '#F1C40F' },
  { id: 'f02', slug: 'the-monochromes', name: 'The Monochromes', motto: 'Power in purity, strength in simplicity.', memberCount: 78, emblemColor: '#BDC3C7' },
  { id: 'f03', slug: 'prism-guard', name: 'The Prism Guard', motto: 'Defenders of the Registry, guardians of the light.', memberCount: 210, emblemColor: '#1ABC9C' },
  { id: 'f04', slug: 'aether-weavers', name: 'Aether Weavers', motto: 'From ethereal hues, we shape reality.', memberCount: 55, emblemColor: '#8E44AD' },
];

const FactionsPage = () => {
  return (
    <>
      <Head>
        <title>Faction Directory - ColorVerse</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Faction Senate</h1>
        </header>

        <div className={styles.controls}>
          <nav className={styles.subNavBar}>
            <Link href="/app/factions" legacyBehavior><a className={`${styles.navLink} ${styles.active}`}>Directory</a></Link>
            <Link href="/app/factions/rankings" legacyBehavior><a className={styles.navLink}>Rankings</a></Link>
            <Link href="/app/factions/diplomacy" legacyBehavior><a className={styles.navLink}>Diplomacy</a></Link>
          </nav>
          <Link href="/app/factions/create" legacyBehavior>
            <a className={styles.createButton}>Create Faction</a>
          </Link>
        </div>
        
        <div className={styles.factionGrid}>
          {mockFactions.map((faction) => (
            <Link key={faction.id} href={`/app/factions/${faction.slug}`} legacyBehavior>
              <a className={styles.factionCard}>
                <div className={styles.emblem} style={{ backgroundColor: faction.emblemColor }} />
                <h3 className={styles.name}>{faction.name}</h3>
                <p className={styles.motto}>"{faction.motto}"</p>
                <div className={styles.stats}>{faction.memberCount} Guardians</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
FactionsPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default FactionsPage;