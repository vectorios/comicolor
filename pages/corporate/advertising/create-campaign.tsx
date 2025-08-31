// pages/corporate/advertising/create-campaign.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import CorporateLayout from '../../../components/corporate/CorporateLayout';
import styles from '../../../styles/Forms.module.css';

const CreateCampaignPage = () => (
    <>
        <Head><title>Create Campaign</title></Head>
         <header className={styles.header}>
            <h1 className={styles.title}>Create New Ad Campaign</h1>
        </header>
        <form className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Campaign Name</label>
                <input type="text" id="name" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="budget" className={styles.label}>Total Budget (PRISMS)</label>
                <input type="number" id="budget" className={styles.input} />
            </div>
            <button type="submit" className={styles.submitButton}>Launch Campaign</button>
        </form>
    </>
);
CreateCampaignPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default CreateCampaignPage;