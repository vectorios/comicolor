// pages/account/security.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import styles from '../../styles/Forms.module.css';

const SecurityPage = () => (
     <>
        <Head><title>Account Security</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Manage Account Security</h1>
            <p className={styles.subtitle}>Update your password and manage two-factor authentication.</p>
        </header>
        <form className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="current-password" className={styles.label}>Current Password</label>
                <input type="password" id="current-password" className={styles.input} />
            </div>
             <div className={styles.formGroup}>
                <label htmlFor="new-password" className={styles.label}>New Password</label>
                <input type="password" id="new-password" className={styles.input} />
            </div>
            <button type="submit" className={styles.submitButton}>Change Password</button>
        </form>
    </>
);
SecurityPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default SecurityPage;