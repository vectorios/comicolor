// pages/corporate/business-registry/register.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import CorporateLayout from '../../../components/corporate/CorporateLayout';
import styles from '../../../styles/Forms.module.css';

const RegisterBusinessPage = () => (
    <>
        <Head><title>Register a Verse Business</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Register a Verse Business</h1>
            <p className={styles.subtitle}>Establish your official presence in the Verse business directory.</p>
        </header>
        <form className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Business Name</label>
                <input type="text" id="name" className={styles.input} />
            </div>
            <button type="submit" className={styles.submitButton}>Register Business</button>
        </form>
    </>
);
RegisterBusinessPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default RegisterBusinessPage;