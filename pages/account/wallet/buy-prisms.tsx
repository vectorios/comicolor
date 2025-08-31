// pages/account/wallet/buy-prisms.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/Forms.module.css';

const BuyPrismsPage = () => (
    <>
        <Head><title>Buy PRISMS</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Buy PRISMS</h1>
            <p className={styles.subtitle}>1 USD = 100 PRISMS. Fund your wallet to participate in the market.</p>
        </header>
        <form className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="amount" className={styles.label}>Amount (USD)</label>
                <input type="number" id="amount" className={styles.input} placeholder="e.g., 50" />
            </div>
            {/* Payment processing elements (Stripe, etc.) would go here */}
            <button type="submit" className={styles.submitButton}>Purchase 5,000 PRISMS</button>
        </form>
    </>
);
BuyPrismsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default BuyPrismsPage;