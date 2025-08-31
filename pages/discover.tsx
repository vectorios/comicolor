// pages/discover.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Discover.module.css';

// Let's create some mock data for the gallery
const mockCreations = [
  { id: 1, title: "Cyberpunk Sunset Palette", creator: "NeonDreamer", imageUrl: "https://placehold.co/600x400/7F00FF/FFFFFF?text=Palette", type: 'palette' },
  { id: 2, title: "Forest Guardian", creator: "ArtisanVerde", imageUrl: "https://placehold.co/600x400/2E8B57/FFFFFF?text=Digital+Art", type: 'digital' },
  { id: 3, title: "Oceanic Depth Moodboard", creator: "AquaSphere", imageUrl: "https://placehold.co/600x400/1E90FF/FFFFFF?text=Moodboard", type: 'digital' },
  { id: 4, title: "Volcanic Ash", creator: "MagmaFlow", imageUrl: "https://placehold.co/600x400/36454F/FFFFFF?text=Sovereign+Color", type: 'color' },
  { id: 5, title: "Minimalist Living Space", creator: "StudioCalm", imageUrl: "https://placehold.co/600x400/F5F5DC/000000?text=Decor", type: 'physical' },
  { id: 6, title: "Retro Arcade Carpet", creator: "PixelPerfect", imageUrl: "https://placehold.co/600x400/FF00FF/000000?text=Pattern", type: 'digital' },
  { id: 7, title: "Serenity Blue Fabric", creator: "TextileWiz", imageUrl: "https://placehold.co/600x400/87CEEB/FFFFFF?text=Material", type: 'physical' },
  { id: 8, title: "Crimson Knight Armor", creator: "ForgeMaster", imageUrl: "https://placehold.co/600x400/DC143C/FFFFFF?text=3D+Model", type: 'digital' },
];

const DiscoverPage = () => {
  const [filter, setFilter] = useState('all');

  // In a real app, this filtering would happen via an API call
  const filteredCreations = mockCreations.filter(creation => {
    if (filter === 'all') return true;
    return creation.type === filter;
  });

  return (
    <>
      <Head>
        <title>Discover Creations - ColorVerse</title>
        <meta name="description" content="Explore the National Gallery of ColorVerse. The most influential physical and digital creations." />
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The National Gallery</h1>
          <p className={styles.subtitle}>
            A curated showcase of the most influential physical and digital creations born from the Sovereign Colors of the Verse.
          </p>
        </header>

        <nav className={styles.filterBar}>
          <button onClick={() => setFilter('all')} className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}>All Creations</button>
          <button onClick={() => setFilter('digital')} className={`${styles.filterButton} ${filter === 'digital' ? styles.active : ''}`}>Digital</button>
          <button onClick={() => setFilter('physical')} className={`${styles.filterButton} ${filter === 'physical' ? styles.active : ''}`}>Physical</button>
          <button onClick={() => setFilter('palette')} className={`${styles.filterButton} ${filter === 'palette' ? styles.active : ''}`}>Palettes</button>
        </nav>

        <div className={styles.galleryGrid}>
          {filteredCreations.map((creation) => (
            <Link key={creation.id} href={`/app/creation/${creation.id}`} legacyBehavior>
              <a className={styles.creationCard}>
                <div className={styles.cardImage}>
                    {/* In a real app, you'd use <Image> from next/image here */}
                    <img src={creation.imageUrl} alt={creation.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{creation.title}</h3>
                  <p className={styles.cardCreator}>
                    by <span className={styles.creatorHighlight}>{creation.creator}</span>
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverPage;
