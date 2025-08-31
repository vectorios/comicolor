// pages/app/registry/index.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Registry.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for Sovereign Colors
const mockColors = [
  { hex: '#FF5733', name: 'Crimson Blaze', owner: 'Vectorios' },
  { hex: '#33FF57', name: 'Emerald Echo', owner: 'ArtisanVerde' },
  { hex: '#3357FF', name: 'Cobalt Dream', owner: 'NeonDreamer' },
  { hex: '#F1C40F', name: 'Sunstone', owner: 'MagmaFlow' },
  { hex: '#8E44AD', name: 'Royal Amethyst', owner: 'Vectorios' },
  { hex: '#E74C3C', name: 'Cinnabar', owner: 'ForgeMaster' },
  { hex: '#1ABC9C', name: 'Turquoise Sea', owner: 'AquaSphere' },
  { hex: '#F7F9F9', name: 'Glacier White', owner: 'StudioCalm' },
  { hex: '#34495E', name: 'Asphalt', owner: 'PixelPerfect' },
  { hex: '#D35400', name: 'Pumpkin Spice', owner: 'Vectorios' },
  { hex: '#2ECC71', name: 'Jungle Canopy', owner: 'ArtisanVerde' },
  { hex: '#FF00FF', name: 'Magenta Shock', owner: 'NeonDreamer' },
];

// Helper function to determine if text should be light or dark based on background color
const getTextColorForBackground = (hexColor: string) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  // Formula for perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? styles.darkText : styles.lightText;
};

const RegistryPage = () => {
  return (
    <>
      <Head>
        <title>The Great Registry - ColorVerse</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Great Registry</h1>
          <p className={styles.subtitle}>Explore the spectrum of all claimed Sovereign Colors in the Verse.</p>
        </header>

        <div className={styles.controls}>
          <input type="search" placeholder="Search by hex, name, or Guardian..." className={styles.searchInput} />
        </div>

        <div className={styles.colorGrid}>
          {mockColors.map((color) => (
            <Link key={color.hex} href={`/app/color/${color.hex.substring(1)}`} legacyBehavior>
              <a className={styles.colorCard}>
                <div className={styles.swatch} style={{ backgroundColor: color.hex }}>
                  <span className={getTextColorForBackground(color.hex)}>{color.name}</span>
                </div>
                <div className={styles.info}>
                  <div className={styles.hexCode}>{color.hex}</div>
                  <div className={styles.owner}>Guardian: {color.owner}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
RegistryPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default RegistryPage;