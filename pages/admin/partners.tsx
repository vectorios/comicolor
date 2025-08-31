// pages/admin/partners.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../components/admin/AdminLayout';
import styles from '../../styles/RegistryTables.module.css';

const mockPartners = [ { id: 'p01', name: 'Stark Industries', plan: 'Corporation', status: 'Active' } ];

const PartnersPage = () => (
    <>
        <Head><title>B2B Partner Management</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>B2B Partner Management</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Partner ID</th><th>Name</th><th>Plan</th><th>Status</th></tr></thead>
                <tbody>{mockPartners.map(p => <tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.plan}</td><td><span className={`${styles.status} ${styles.resolved}`}>{p.status}</span></td></tr>)}</tbody>
            </table>
        </div>
    </>
);
PartnersPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default PartnersPage;