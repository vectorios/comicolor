// pages/admin/logs.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';
import styles from '../../styles/RegistryTables.module.css';

const mockLogs = [ { timestamp: '2025-08-31 10:00', admin: 'Justicar Lumen', action: 'Suspended user ArtisanVerde' } ];

const LogsPage = () => (
    <>
        <Head><title>Audit Logs</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Audit Logs</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Timestamp</th><th>Admin User</th><th>Action</th></tr></thead>
                <tbody>
                    {mockLogs.map((log, i) => (
                        <tr key={i}>
                            <td>{log.timestamp}</td><td>{log.admin}</td><td>{log.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
LogsPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default LogsPage;