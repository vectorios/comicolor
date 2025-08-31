// pages/admin/justice/dashboard.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/Dashboard.module.css';

const JusticeDashboardPage = () => (
    <>
        <Head><title>Justice Dashboard</title></Head>
        <h1 style={{fontSize: '2rem', marginBottom: '2rem'}}>Moderator Council Dashboard</h1>
        <div className={styles.grid}>
            <div className={styles.card}><h2 className={styles.cardTitle}>New Complaints</h2><span className={styles.statValue}>2</span></div>
            <div className={styles.card}><h2 className={styles.cardTitle}>Cases in Deliberation</h2><span className={styles.statValue}>1</span></div>
            <div className={styles.card}><h2 className={styles.cardTitle}>Open Mediation Dossiers</h2><span className={styles.statValue}>4</span></div>
        </div>
    </>
);
JusticeDashboardPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default JusticeDashboardPage;