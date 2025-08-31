// pages/account/subscription.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import cardStyles from '../../styles/Dashboard.module.css';

const SubscriptionPage = () => (
    <>
        <Head><title>Manage Subscription</title></Head>
        <div className={cardStyles.card}>
            <h2 className={cardStyles.cardTitle}>Current Plan: PRO</h2>
            <p>Your plan renews on September 30, 2025.</p>
            <div className={cardStyles.quickActionsList}>
                <button className={cardStyles.actionButton}>Change Plan</button>
                <button className={cardStyles.actionButton} style={{backgroundColor: '#dc3545'}}>Cancel Subscription</button>
            </div>
        </div>
    </>
);
SubscriptionPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default SubscriptionPage;