// pages/admin/guardians/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import tableStyles from '../../../styles/RegistryTables.module.css'; // Reuse table styles

const mockGuardians = [
    { id: 'u01', name: 'Vectorios', email: 'vec@verse.io', status: 'Active' },
    { id: 'u02', name: 'NeonDreamer', email: 'neon@verse.io', status: 'Active' },
    { id: 'u03', name: 'ArtisanVerde', email: 'art@verse.io', status: 'Suspended' },
];

const GuardianSearchPage = () => (
    <>
        <Head><title>Guardian Management</title></Head>
        <div className={tableStyles.tablePageContainer}>
            <header className={tableStyles.header}>
                <h1 className={tableStyles.title}>Guardian Management (CRM)</h1>
                <input type="search" placeholder="Search by name, email, user ID..." style={{width: '100%', padding: '0.8rem', marginTop:'1rem', backgroundColor: '#161625', border:'1px solid #a0a0b0', borderRadius:'8px', color:'#fff'}}/>
            </header>
            <table className={tableStyles.table}>
                 <thead><tr><th>User ID</th><th>Name</th><th>Email</th><th>Status</th></tr></thead>
                 <tbody>
                    {mockGuardians.map(g => (
                        <tr key={g.id}>
                            <td>{g.id}</td><td>{g.name}</td><td>{g.email}</td>
                            <td><span className={`${tableStyles.status} ${g.status === 'Active' ? tableStyles.resolved : tableStyles.dismissed}`}>{g.status}</span></td>
                        </tr>
                    ))}
                 </tbody>
            </table>
        </div>
    </>
);
GuardianSearchPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default GuardianSearchPage;