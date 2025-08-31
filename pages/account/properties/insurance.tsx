// pages/account/properties/insurance.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/Forms.module.css';

const InsurancePage = () => (
    <>
        <Head><title>Asset Insurance</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Asset Insurance Policies</h1>
            <p className={styles.subtitle}>Protect your most valuable Sovereign Colors against market volatility or forced archival.</p>
        </header>
        <div className={styles.formContainer}>
            <p>The Verse Insurance Guild is currently in development. Asset insurance will be available in a future update to the Codex.</p>
        </div>
    </>
);
InsurancePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default InsurancePage;