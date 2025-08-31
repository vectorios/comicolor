// pages/app/market/auctions.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Auctions.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for active auctions
const mockAuctions = [
  { id: 'a001', hex: '#8E44AD', name: 'Royal Amethyst', currentBid: 450, timeLeft: '1h 22m 15s', bidders: 7 },
  { id: 'a002', hex: '#2ECC71', name: 'Jungle Canopy', currentBid: 300, timeLeft: '4h 50m 02s', bidders: 4 },
  { id: 'a003', hex: '#3357FF', name: 'Cobalt Dream', currentBid: 875, timeLeft: '1d 2h 10m', bidders: 12 },
  { id: 'a004', hex: '#FF00FF', name: 'Magenta Shock', currentBid: 120, timeLeft: '23m 40s', bidders: 2 },
];

const AuctionsPage = () => {
  return (
    <>
      <Head>
        <title>Auctions - The Unified Market</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Unified Market</h1>
          <p className={styles.subtitle}>Place your bids in the Hall of Active Auctions.</p>
        </header>

        <nav className={styles.subNavBar}>
          <Link href="/app/market" legacyBehavior><a className={styles.navLink}>Listings</a></Link>
          <Link href="/app/market/auctions" legacyBehavior><a className={`${styles.navLink} ${styles.active}`}>Auctions</a></Link>
          <Link href="/app/market/trades" legacyBehavior><a className={styles.navLink}>Trades</a></Link>
          <Link href="/app/market/bounties" legacyBehavior><a className={styles.navLink}>Bounties</a></Link>
        </nav>

        <div className={styles.auctionGrid}>
          {mockAuctions.map((auction) => (
            <Link key={auction.id} href={`/app/market/listing/${auction.id}`} legacyBehavior>
              <a className={styles.auctionCard}>
                <div className={styles.swatch} style={{ backgroundColor: auction.hex }}></div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{auction.name}</h3>
                  <div className={styles.bidInfo}>
                    <div className={styles.bidLabel}>Current Bid</div>
                    <div className={styles.bidValue}>{auction.currentBid} PRISMS</div>
                  </div>
                  <div className={styles.timer}>{auction.timeLeft} left</div>
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
AuctionsPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default AuctionsPage;