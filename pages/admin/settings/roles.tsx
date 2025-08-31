// pages/admin/settings/roles.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockRoles = [ { id: 'admin', name: 'Admin', users: 1 }, { id: 'mod', name: 'Moderator', users: 3 } ];

const RolesPage = () => (
    <>
        <Head><title>Role Management</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>User Roles & Permissions</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Role</th><th>Assigned Users</th><th>Actions</th></tr></thead>
                <tbody>{mockRoles.map(r => <tr key={r.id}><td>{r.name}</td><td>{r.users}</td><td><button>Edit Permissions</button></td></tr>)}</tbody>
            </table>
        </div>
    </>
);
RolesPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default RolesPage;