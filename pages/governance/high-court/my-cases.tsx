// pages/governance/high-court/my-cases.tsx
// This page is very similar to the public registry, but filtered.
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/RegistryTables.module.css';
import AppLayout from '../../../components/app/AppLayout';

const myMockCases = [
    { id: 'HC-2025-017', title: 'Dispute over "Azure Sky" Ownership', status: 'Resolved', date: '2025-08-15', role: 'Plaintiff' },
    { id: 'HC-2025-014', title: 'Inquiry into Market Manipulation', status: 'Dismissed', date: '2025-07-20', role: 'Witness' },
];

const MyCasesPage = () => (
    <>
        <Head><title>My Cases - High Court</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>My Cases</h1>
                <p className={styles.subtitle}>All judicial cases where you are listed as a plaintiff, defendant, or witness.</p>
            </header>
            <table className={styles.table}>
                <thead><tr><th>Case ID</th><th>Title</th><th>Status</th><th>My Role</th></tr></thead>
                <tbody>
                    {myMockCases.map(caseItem => (
                         <tr key={caseItem.id}>
                            <td><Link href={`/admin/justice/case/${caseItem.id}`} className={styles.link}>{caseItem.id}</Link></td>
                            <td>{caseItem.title}</td>
                            <td><span className={`${styles.status} ${styles[caseItem.status.toLowerCase().replace(' ', '')]}`}>{caseItem.status}</span></td>
                            <td>{caseItem.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

MyCasesPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default MyCasesPage;