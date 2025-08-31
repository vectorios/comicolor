// pages/account/my-faction.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import styles from '../../styles/Dashboard.module.css';

const MyFactionPage = () => (
    <>
        <Head><title>My Faction</title></Head>
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>The Chromatic Order</h2>
            <p>Your Role: Vanguard</p>
            <div className={styles.quickActionsList} style={{marginTop: '1rem'}}>
                <Link href="/app/factions/chromatic-order" className={styles.actionButton}>View Faction Page</Link>
                <Link href="/app/factions/chromatic-order/manage" className={styles.actionButton}>Manage Faction (Leader)</Link>
            </div>
        </div>
    </>
);
MyFactionPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default MyFactionPage;