// pages/app/registry/relics.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Relics.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for archived (burned) colors
const mockRelics = [
  { hex: '#6D7B8D', name: 'Forgotten Slate', formerOwner: 'Vectorios', archivedDate: '2024-08-15' },
  { hex: '#C3B091', name: 'Dusty Parchment', formerOwner: 'PixelPerfect', archivedDate: '2024-07-22' },
  { hex: '#4B0082', name: 'Faded Indigo', formerOwner: 'ArtisanVerde', archivedDate: '2024-06-01' },
  { hex: '#965A3E', name: 'Ancient Umber', formerOwner: 'MagmaFlow', archivedDate: '2024-05-19' },
  { hex: '#778899', name: 'Ghost Grey', formerOwner: 'NeonDreamer', archivedDate: '2024-03-30' },
];

const RelicsPage = () => {
  return (
    <>
      <Head>
        <title>Relics - The Great Registry</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Relics</h1>
          <p className={styles.subtitle}>
            A memorial for Sovereign Colors that have been archived. Their history is preserved, but they can no longer be used or traded.
          </p>
        </header>

        <ul className={styles.relicsList}>
          {mockRelics.map((relic) => (
            <li key={relic.hex} className={styles.relicItem}>
              <div className={styles.swatch} style={{ backgroundColor: relic.hex }}></div>
              <div className={styles.info}>
                <div className={styles.mainInfo}>
                  <span className={styles.name}>{relic.name}</span>
                  <span className={styles.hexCode}>{relic.hex}</span>
                </div>
                <div className={styles.details}>
                  Formerly held by {relic.formerOwner} • Archived on {relic.archivedDate}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
RelicsPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default RelicsPage;