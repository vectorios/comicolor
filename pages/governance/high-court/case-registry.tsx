// pages/governance/high-court/case-registry.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/RegistryTables.module.css'; // We'll create a shared table style
import AppLayout from '../../../components/app/AppLayout';

const mockCases = [
    { id: 'HC-2025-017', title: 'Dispute over "Azure Sky" Ownership', status: 'Resolved', date: '2025-08-15' },
    { id: 'HC-2025-016', title: 'Alleged Violation of Faction Treaty', status: 'In Deliberation', date: '2025-08-10' },
    { id: 'HC-2025-015', title: 'Claim of Palette Plagiarism', status: 'Resolved', date: '2025-07-28' },
];

const CaseRegistryPage = () => (
    <>
        <Head><title>Case Registry - High Court</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Public Case Registry</h1>
                <p className={styles.subtitle}>The official record of all judicial proceedings of the High Court.</p>
            </header>
            <table className={styles.table}>
                <thead><tr><th>Case ID</th><th>Title</th><th>Status</th><th>Date Filed</th></tr></thead>
                <tbody>
                    {mockCases.map(caseItem => (
                        <tr key={caseItem.id}>
                            <td><Link href={`/admin/justice/case/${caseItem.id}`} className={styles.link}>{caseItem.id}</Link></td>
                            <td>{caseItem.title}</td>
                            <td><span className={`${styles.status} ${styles[caseItem.status.toLowerCase().replace(' ', '')]}`}>{caseItem.status}</span></td>
                            <td>{caseItem.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

CaseRegistryPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default CaseRegistryPage;