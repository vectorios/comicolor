// pages/account/data.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import styles from '../../styles/Forms.module.css';

const DataPage = () => (
    <>
        <Head><title>Manage Personal Data</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Manage Your Personal Data</h1>
            <p className={styles.subtitle}>You have the right to control your data within the Verse.</p>
        </header>
        <div className={styles.formContainer}>
            <button className={styles.submitButton} style={{marginBottom: '1rem'}}>Export My Data</button>
            <button className={styles.submitButton} style={{backgroundColor: '#dc3545'}}>Delete My Account</button>
        </div>
    </>
);
DataPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default DataPage;