// pages/app/market/trades.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Trades.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for public trade proposals
const mockTrades = [
  {
    id: 't001',
    proposer: 'Vectorios',
    offering: [{ hex: '#FF5733' }, { hex: '#D35400' }],
    seeking: 'Any "Glacier" type color'
  },
  {
    id: 't002',
    proposer: 'AquaSphere',
    offering: [{ hex: '#1ABC9C' }],
    seeking: 'Sovereign Color #3357FF'
  },
  {
    id: 't003',
    proposer: 'ForgeMaster',
    offering: [{ hex: '#E74C3C' }],
    seeking: '2x "Volcanic" type colors'
  },
  {
    id: 't004',
    proposer: 'NeonDreamer',
    offering: [{ hex: '#FF00FF' }, { hex: '#3357FF' }],
    seeking: '1x "Retro" type color'
  },
];

const TradesPage = () => {
  return (
    <>
      <Head>
        <title>Trades - The Unified Market</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Unified Market</h1>
          <p className={styles.subtitle}>Browse and respond to public trade proposals.</p>
        </header>

        <nav className={styles.subNavBar}>
          <Link href="/app/market" legacyBehavior><a className={styles.navLink}>Listings</a></Link>
          <Link href="/app/market/auctions" legacyBehavior><a className={styles.navLink}>Auctions</a></Link>
          <Link href="/app/market/trades" legacyBehavior><a className={`${styles.navLink} ${styles.active}`}>Trades</a></Link>
          <Link href="/app/market/bounties" legacyBehavior><a className={styles.navLink}>Bounties</a></Link>
        </nav>

        <div className={styles.tradeList}>
          {mockTrades.map((trade) => (
            <Link key={trade.id} href={`/app/market/listing/${trade.id}`} legacyBehavior>
              <a className={styles.tradeItem}>
                <div className={styles.proposerInfo}>
                  Proposed by <span>{trade.proposer}</span>
                </div>
                <div className={styles.tradeDetails}>
                  <div className={styles.colorGroup}>
                    {trade.offering.map(color => <div key={color.hex} className={styles.swatch} style={{backgroundColor: color.hex}}></div>)}
                  </div>
                  <div className={styles.tradeArrow}>→</div>
                  <div className={styles.seekingText}>{trade.seeking}</div>
                </div>
                <button className={styles.viewButton}>View Trade</button>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
TradesPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default TradesPage;