// pages/admin/dashboard.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout'; // We will create this
import cardStyles from '../../styles/Dashboard.module.css'; // Reuse dashboard card styles

const AdminDashboardPage = () => (
    <>
        <Head><title>Admin Dashboard</title></Head>
        <h1 style={{fontSize: '2rem', marginBottom: '2rem'}}>Ecosystem Health Overview</h1>
        <div className={cardStyles.grid}>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Active Guardians (24h)</h2>
                <span className={cardStyles.statValue}>1,284</span>
            </div>
             <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Market Volume (24h)</h2>
                <span className={cardStyles.statValue}>152,730 <span style={{fontSize:'1rem'}}>PRISMS</span></span>
            </div>
             <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Open Support Tickets</h2>
                <span className={cardStyles.statValue}>14</span>
            </div>
              <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Reported Content</h2>
                <span className={cardStyles.statValue}>3</span>
            </div>
        </div>
    </>
);
AdminDashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default AdminDashboardPage;