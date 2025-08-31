// pages/account/my-business.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import styles from '../../styles/Dashboard.module.css';

const MyBusinessPage = () => (
    <>
        <Head><title>My Verse Business</title></Head>
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Verse Entrepreneur Dashboard</h2>
            <p>You have not registered a business in the Verse.</p>
            <div className={styles.quickActionsList} style={{marginTop: '1rem'}}>
                <Link href="/corporate/business-registry/register" className={styles.actionButton}>Register a Business</Link>
            </div>
        </div>
    </>
);
MyBusinessPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default MyBusinessPage;