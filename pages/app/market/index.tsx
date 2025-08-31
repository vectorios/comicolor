// pages/app/market/index.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Market.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for fixed-price listings
const mockListings = [
  { id: 'l001', hex: '#FF5733', name: 'Crimson Blaze', price: 150, seller: 'Vectorios' },
  { id: 'l002', hex: '#F1C40F', name: 'Sunstone', price: 220, seller: 'MagmaFlow' },
  { id: 'l003', hex: '#1ABC9C', name: 'Turquoise Sea', price: 180, seller: 'AquaSphere' },
  { id: 'l004', hex: '#34495E', name: 'Asphalt', price: 95, seller: 'PixelPerfect' },
  { id: 'l005', hex: '#D35400', name: 'Pumpkin Spice', price: 125, seller: 'Vectorios' },
  { id: 'l006', hex: '#E74C3C', name: 'Cinnabar', price: 350, seller: 'ForgeMaster' },
];

const MarketPage = () => {
  return (
    <>
      <Head>
        <title>The Unified Market - ColorVerse</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Unified Market</h1>
          <p className={styles.subtitle}>The central hub for all economic activity in the Verse.</p>
        </header>

        <nav className={styles.subNavBar}>
          <Link href="/app/market" legacyBehavior><a className={`${styles.navLink} ${styles.active}`}>Listings</a></Link>
          <Link href="/app/market/auctions" legacyBehavior><a className={styles.navLink}>Auctions</a></Link>
          <Link href="/app/market/trades" legacyBehavior><a className={styles.navLink}>Trades</a></Link>
          <Link href="/app/market/bounties" legacyBehavior><a className={styles.navLink}>Bounties</a></Link>
        </nav>

        <div className={styles.listingGrid}>
          {mockListings.map((listing) => (
            <Link key={listing.id} href={`/app/market/listing/${listing.id}`} legacyBehavior>
              <a className={styles.listingCard}>
                <div className={styles.swatch} style={{ backgroundColor: listing.hex }}></div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{listing.name}</h3>
                  <p className={styles.seller}>by {listing.seller}</p>
                  <div className={styles.price}>
                    {listing.price} <span>PRISMS</span>
                  </div>
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
MarketPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default MarketPage;