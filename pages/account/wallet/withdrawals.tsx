// pages/account/wallet/withdrawals.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/Forms.module.css';

const WithdrawalsPage = () => (
    <>
        <Head><title>Withdraw Funds</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Withdraw PRISMS</h1>
            <p className={styles.subtitle}>Convert your PRISMS balance to USD. A 2.5% transaction fee applies.</p>
        </header>
        <form className={styles.formContainer}>
             <div className={styles.formGroup}>
                <label htmlFor="amount" className={styles.label}>Amount (PRISMS)</label>
                <input type="number" id="amount" className={styles.input} placeholder="e.g., 10000" />
            </div>
            <button type="submit" className={styles.submitButton}>Initiate Withdrawal</button>
        </form>
    </>
);
WithdrawalsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default WithdrawalsPage;