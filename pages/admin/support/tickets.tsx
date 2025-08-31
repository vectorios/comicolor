// pages/admin/support/tickets.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockTickets = [ { id: 'TKT-01', user: 'PixelPerfect', subject: 'Login issue', status: 'Open' } ];

const SupportTicketsPage = () => (
    <>
        <Head><title>Support Tickets</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Support Tickets</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Ticket ID</th><th>User</th><th>Subject</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                    {mockTickets.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td><td>{item.user}</td><td>{item.subject}</td>
                            <td><span className={`${styles.status} ${styles.dismissed}`}>{item.status}</span></td>
                            <td><button>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
SupportTicketsPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default SupportTicketsPage;