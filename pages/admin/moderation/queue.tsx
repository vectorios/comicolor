// pages/admin/moderation/queue.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockQueue = [ { id: 'REP-01', type: 'Post', reporter: 'ArtisanVerde', reason: 'Spam' } ];

const ModerationQueuePage = () => (
    <>
        <Head><title>Moderation Queue</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Moderation Queue</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Report ID</th><th>Type</th><th>Reporter</th><th>Reason</th><th>Actions</th></tr></thead>
                <tbody>
                    {mockQueue.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td><td>{item.type}</td><td>{item.reporter}</td><td>{item.reason}</td>
                            <td><button>Review</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
ModerationQueuePage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default ModerationQueuePage;