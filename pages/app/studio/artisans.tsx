// pages/app/studio/artisans.tsx

import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Artisans.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for artisans
const mockArtisans = [
  { id: 'art01', name: 'Studio PrintWorks', specialty: 'Fine Art & Giclée Printing', tags: ['printing', 'paper', 'digital'], avatarUrl: '/avatar.png' },
  { id: 'art02', name: 'Helena Vance', specialty: 'Interior Design Consultant', tags: ['decor', 'consulting'], avatarUrl: '/avatar.png' },
  { id: 'art03', name: 'Forge & Fabric', specialty: 'Custom Textiles & Upholstery', tags: ['textiles', 'physical'], avatarUrl: '/avatar.png' },
  { id: 'art04', name: 'Pixel Foundry', specialty: 'Digital Asset Creation (3D)', tags: ['3d', 'digital'], avatarUrl: '/avatar.png' },
  { id: 'art05', name: 'The Canvas Co.', specialty: 'Canvas and Wall Murals', tags: ['printing', 'decor', 'physical'], avatarUrl: '/avatar.png' },
  { id: 'art06', name: 'Brand Architects', specialty: 'Brand Identity Design', tags: ['consulting', 'digital'], avatarUrl: '/avatar.png' },
];

const ArtisansPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredArtisans = mockArtisans.filter(artisan => {
    if (filter === 'all') return true;
    return artisan.tags.includes(filter);
  });

  return (
    <>
      <Head>
        <title>Certified Artisans - ColorVerse Studio</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Directory of Certified Artisans</h1>
          <p className={styles.subtitle}>
            Find trusted professionals to help bring your digital assets into the physical world.
          </p>
        </header>

        <nav className={styles.filterBar}>
          <button onClick={() => setFilter('all')} className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}>All</button>
          <button onClick={() => setFilter('printing')} className={`${styles.filterButton} ${filter === 'printing' ? styles.active : ''}`}>Printing</button>
          <button onClick={() => setFilter('decor')} className={`${styles.filterButton} ${filter === 'decor' ? styles.active : ''}`}>Decor</button>
          <button onClick={() => setFilter('digital')} className={`${styles.filterButton} ${filter === 'digital' ? styles.active : ''}`}>Digital Services</button>
          <button onClick={() => setFilter('consulting')} className={`${styles.filterButton} ${filter === 'consulting' ? styles.active : ''}`}>Consulting</button>
        </nav>

        <div className={styles.artisanGrid}>
          {filteredArtisans.map((artisan) => (
            <Link key={artisan.id} href={`/app/users/${artisan.name.replace(/\s+/g, '')}`} legacyBehavior>
              <a className={styles.artisanCard}>
                <div className={styles.avatar} /> {/* Placeholder for avatar */}
                <h3 className={styles.name}>{artisan.name}</h3>
                <p className={styles.specialty}>{artisan.specialty}</p>
                <div className={styles.tagList}>
                  {artisan.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
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
ArtisansPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default ArtisansPage;