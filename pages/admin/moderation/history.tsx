// pages/admin/moderation/history.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockHistory = [ { id: 'REP-00', mod: 'Aequitas', action: 'Removed post for spam', date: '2025-08-30' } ];

const ModerationHistoryPage = () => (
    <>
        <Head><title>Moderation History</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Moderation History</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Date</th><th>Moderator</th><th>Action</th></tr></thead>
                <tbody>
                    {mockHistory.map(item => (<tr key={item.id}><td>{item.date}</td><td>{item.mod}</td><td>{item.action}</td></tr>))}
                </tbody>
            </table>
        </div>
    </>
);
ModerationHistoryPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default ModerationHistoryPage;