// pages/corporate/dashboard.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import CorporateLayout from '../../components/corporate/CorporateLayout'; // We will create this
import cardStyles from '../../styles/Dashboard.module.css';

const CorporateDashboardPage = () => (
    <>
        <Head><title>Brand Dashboard</title></Head>
        <div className={cardStyles.grid}>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Campaign Performance</h2>
                <span className={cardStyles.statValue}>+15%</span>
                <span className={cardStyles.statLabel}> Engagement YoY</span>
            </div>
             <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Brandlocked Color</h2>
                 <div style={{width: '100%', height: '50px', backgroundColor: '#0047AB', borderRadius: '8px', border: '2px solid #fff'}} />
                 <p style={{marginTop: '1rem', fontWeight:'bold'}}>Cobalt Blue (#0047AB)</p>
            </div>
             <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Active Benefits</h2>
                <span className={cardStyles.statValue}>3</span>
                <span className={cardStyles.statLabel}> Discounts for Guardians</span>
            </div>
        </div>
    </>
);
CorporateDashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default CorporateDashboardPage;