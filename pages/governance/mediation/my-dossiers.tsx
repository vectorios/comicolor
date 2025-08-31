// pages/governance/mediation/my-dossiers.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/RegistryTables.module.css';
import AppLayout from '../../../components/app/AppLayout';

const myMockDossiers = [
    { id: 'M-2025-041', issue: 'Disagreement over a trade agreement', status: 'Mediator Assigned', date: '2025-08-20' },
    { id: 'M-2025-038', issue: 'Verbal harassment in The Verse', status: 'Resolved', date: '2025-07-15' },
];

const MyDossiersPage = () => (
    <>
        <Head><title>My Mediation Dossiers</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>My Dossiers</h1>
                <p className={styles.subtitle}>Track the status of all your active and past mediation cases.</p>
            </header>
            <table className={styles.table}>
                <thead><tr><th>Dossier ID</th><th>Issue</th><th>Status</th><th>Date Opened</th></tr></thead>
                <tbody>
                    {myMockDossiers.map(dossier => (
                        <tr key={dossier.id}>
                            <td>{dossier.id}</td>
                            <td>{dossier.issue}</td>
                            <td><span className={`${styles.status} ${dossier.status.toLowerCase().replace(' ', '')}`}>{dossier.status}</span></td>
                            <td>{dossier.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
MyDossiersPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default MyDossiersPage;