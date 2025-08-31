// pages/app/dashboard.tsx
import React, { ReactElement } from 'react'; // <-- Make sure ReactElement is imported
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';
import AppLayout from '../../components/app/AppLayout'; // <-- IMPORT THE APP LAYOUT

const DashboardPage = () => {
  const guardianName = "Vectorios"; 

  return (
    <>
      <Head>
        <title>Dashboard - The Guardian's Desk</title>
      </Head>
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome, {guardianName}</h1>
          <p className={styles.subtitle}>This is your personal command center. What will you create today?</p>
        </header>
        
        <div className={styles.grid}>
          {/* ... reste du code de la page ... */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>My Properties</h2>
            <div>
              <span className={styles.statValue}>17</span>
              <span className={styles.statLabel}> Sovereign Colors</span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <span className={styles.statValue}>5</span>
              <span className={styles.statLabel}> Creations</span>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Market Watch</h2>
            <div>
              <span className={styles.statValue}>2</span>
              <span className={styles.statLabel}> Active Listings</span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <span className={styles.statValue}>1</span>
              <span className={styles.statLabel}> Active Bid</span>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Quick Actions</h2>
            <div className={styles.quickActionsList}>
              <Link href="/app/registry/public-domain" legacyBehavior><a className={styles.actionButton}>Claim a New Color</a></Link>
              <Link href="/app/market/create-listing" legacyBehavior><a className={styles.actionButton}>Create a Listing</a></Link>
              <Link href="/app/verse/create-post" legacyBehavior><a className={styles.actionButton}>Write a Post</a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// V-- ADD THIS CODE AT THE END OF THE FILE --V
DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default DashboardPage;