// pages/corporate/brandlock.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import CorporateLayout from '../../components/corporate/CorporateLayout';
import styles from '../../styles/Forms.module.css';

const BrandlockPage = () => (
     <>
        <Head><title>Manage Brandlock</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Manage Brandlocked Color</h1>
            <p className={styles.subtitle}>Your Brandlocked color is exclusively reserved for your corporate entity within the Verse.</p>
        </header>
         <div className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Current Brandlocked Color</label>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{width: '50px', height: '50px', backgroundColor: '#0047AB', borderRadius: '8px'}} />
                    <h3>Cobalt Blue (#0047AB)</h3>
                </div>
            </div>
            <p>To transfer or release your Brandlock, please contact corporate support.</p>
        </div>
    </>
);
BrandlockPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default BrandlockPage;