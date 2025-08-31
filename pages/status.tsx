// pages/status.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Status.module.css';

const StatusPage = () => (
    <div className={styles.pageContainer}>
        <Head><title>System Status - ColorVerse</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>The Verse Observatory</h1>
        </header>
        <div className={styles.overallStatus + ' ' + styles.operational}>
            All Systems Operational
        </div>
        <ul className={styles.systemList}>
            <li className={styles.systemItem}><span className={styles.systemName}>Public Website & CDN</span><span className={styles.statusIndicator + ' ' + styles.operational}>Operational</span></li>
            <li className={styles.systemItem}><span className={styles.systemName}>API Gateway</span><span className={styles.statusIndicator + ' ' + styles.operational}>Operational</span></li>
            <li className={styles.systemItem}><span className={styles.systemName}>Guardian Authentication</span><span className={styles.statusIndicator + ' ' + styles.operational}>Operational</span></li>
            <li className={styles.systemItem}><span className={styles.systemName}>The Great Registry (Database)</span><span className={styles.statusIndicator + ' ' + styles.operational}>Operational</span></li>
            <li className={styles.systemItem}><span className={styles.systemName}>Unified Market Engine</span><span className={styles.statusIndicator + ' ' + styles.operational}>Operational</span></li>
        </ul>
    </div>
);
export default StatusPage;