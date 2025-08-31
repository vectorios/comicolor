// pages/account/properties/will.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/Forms.module.css';

const WillPage = () => (
    <>
        <Head><title>Chromatic Will</title></Head>
         <header className={styles.header}>
            <h1 className={styles.title}>Chromatic Will & Testament</h1>
            <p className={styles.subtitle}>Designate a beneficiary to inherit your Sovereign Colors and creations in the event of prolonged inactivity.</p>
        </header>
        <form className={styles.formContainer}>
             <div className={styles.formGroup}>
                <label htmlFor="beneficiary" className={styles.label}>Beneficiary Guardian Name</label>
                <input type="text" id="beneficiary" className={styles.input} placeholder="Enter beneficiary's username" />
            </div>
             <div className={styles.formGroup}>
                <label htmlFor="inactivity" className={styles.label}>Inactivity Period for Transfer</label>
                <select id="inactivity" className={styles.input}>
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>5 years</option>
                </select>
            </div>
            <button type="submit" className={styles.submitButton}>Sign and Ratify Will</button>
        </form>
    </>
);
WillPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default WillPage;