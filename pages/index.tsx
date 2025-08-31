// pages/index.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ColorVerse: The Sovereign Nation of Color</title>
        <meta name="description" content="Welcome to ColorVerse, where every color has a sovereign and every creator a voice." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Book I: The Public Portal - / (The Grand Plaza) */}
        <section className={styles.hero}>
          <h1>Welcome to ColorVerse</h1>
          <p>
            The Sovereign Nation of Color. A new world where creators claim, trade, and build with the very essence of light. 
            This is where every color has a history, and you are its Guardian.
          </p>
          <Link href="/register" legacyBehavior>
            <a className={styles.ctaButton}>Take the Guardian's Oath</a>
          </Link>
        </section>

        <div className={styles.mainContent}>
          {/* Core Pillars Section */}
          <section id="pillars">
            <h2 className={styles.sectionTitle}>The Nation's Pillars</h2>
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <h3>Sovereign Ownership</h3>
                <p>Claim unique hexadecimal colors as your own sovereign assets. You are the sole Guardian of your color's destiny.</p>
              </div>
              <div className={styles.pillarCard}>
                <h3>Unified Market</h3>
                <p>Trade, auction, and license your colors and creations in a transparent and dynamic economy built for creators.</p>
              </div>
              <div className={styles.pillarCard}>
                <h3>Creative Governance</h3>
                <p>Participate in the legislative process. Propose amendments to the Codex and vote on the future of the Verse.</p>
              </div>
            </div>
          </section>

          {/* Notable Works Section */}
          <section id="creations" style={{ marginTop: '6rem' }}>
            <h2 className={styles.sectionTitle}>Featured Creations</h2>
            <div className={styles.showcaseGrid}>
              <div className={styles.showcaseItem}>Creation A - Palette</div>
              <div className={styles.showcaseItem}>Creation B - Digital Art</div>
              <div className={styles.showcaseItem}>Creation C - Mood Board</div>
              <div className={styles.showcaseItem}>Creation D - Brand Identity</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;