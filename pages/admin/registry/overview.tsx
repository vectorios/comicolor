// pages/admin/registry/overview.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockColors = [ { hex: '#FF5733', name: 'Crimson Blaze', owner: 'Vectorios' } ];

const RegistryOverviewPage = () => (
    <>
        <Head><title>Registry Management</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Registry Supervision</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Hex Code</th><th>Name</th><th>Guardian</th><th>Actions</th></tr></thead>
                <tbody>
                    {mockColors.map(c => (
                        <tr key={c.hex}>
                            <td>{c.hex}</td><td>{c.name}</td><td>{c.owner}</td>
                            <td><button>Edit Data</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
RegistryOverviewPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default RegistryOverviewPage;