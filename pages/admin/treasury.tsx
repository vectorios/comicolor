// pages/admin/treasury.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';
import styles from '../../styles/Dashboard.module.css';

const TreasuryPage = () => (
    <>
        <Head><title>Verse Treasury</title></Head>
        <h1 style={{fontSize: '2rem', marginBottom: '2rem'}}>Treasury Management</h1>
        <div className={styles.grid}>
            <div className={styles.card}><h2 className={styles.cardTitle}>Total Treasury Balance</h2><span className={styles.statValue}>1,234,567 <span style={{fontSize:'1rem'}}>PRISMS</span></span></div>
            <div className={styles.card}><h2 className={styles.cardTitle}>Sovereignty Tax Income (24h)</h2><span className={styles.statValue}>+5,820</span></div>
        </div>
    </>
);
TreasuryPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default TreasuryPage;