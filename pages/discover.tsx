// pages/discover.tsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Discover.module.css';
import { supabase } from '../lib/supabaseClient';

// Define a type for our creation data
interface Creation {
  id: string;
  title: string;
  image_url: string;
}

const DiscoverPage = () => {
  const [filter, setFilter] = useState('all');
  const [creations, setCreations] = useState<Creation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreations = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('creations')
        .select('id, title, image_url');

      if (error) {
        console.error('Error fetching creations:', error);
      } else if (data) {
        setCreations(data);
      }
      setLoading(false);
    };

    fetchCreations();
  }, []);

  if (loading) {
    return <div>Loading creations...</div>;
  }

  return (
    <>
      <Head>
        <title>Discover Creations - ColorVerse</title>
        <meta name="description" content="Explore the National Gallery of ColorVerse." />
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The National Gallery</h1>
          <p className={styles.subtitle}>
            A curated showcase of the most influential physical and digital creations born from the Sovereign Colors of the Verse.
          </p>
        </header>

        {/* --- CORRECTION ICI --- */}
        <nav className={styles.filterBar}>
          <button onClick={() => setFilter('all')} className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}>All Creations</button>
          <button onClick={() => setFilter('digital')} className={`${styles.filterButton} ${filter === 'digital' ? styles.active : ''}`}>Digital</button>
          <button onClick={() => setFilter('physical')} className={`${styles.filterButton} ${filter === 'physical' ? styles.active : ''}`}>Physical</button>
          <button onClick={() => setFilter('palette')} className={`${styles.filterButton} ${filter === 'palette' ? styles.active : ''}`}>Palettes</button>
        </nav>
        {/* --- FIN DE LA CORRECTION --- */}

        <div className={styles.galleryGrid}>
          {creations.map((creation) => (
            <Link key={creation.id} href={`/app/creation/${creation.id}`} legacyBehavior>
              <a className={styles.creationCard}>
                <div className={styles.cardImage}>
                    <img src={creation.image_url || 'https://placehold.co/600x400/333/FFF?text=No+Image'} alt={creation.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{creation.title}</h3>
                  <p className={styles.cardCreator}>
                    by <span className={styles.creatorHighlight}>A Guardian</span>
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