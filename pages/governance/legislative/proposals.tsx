// pages/governance/legislative/proposals.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Proposals.module.css'; // New CSS file
import AppLayout from '../../../components/app/AppLayout';

const mockProposals = [
    { id: 'CVA-028', title: 'Amendment to Faction Treasury Tax Laws', status: 'Debating', proposer: 'Vectorios' },
    { id: 'CVA-027', title: 'Proposal for a "Vintage" Color Tag', status: 'Voting', proposer: 'NeonDreamer' },
    { id: 'CVA-026', title: 'Ratification of the Artisan Guild Act', status: 'Passed', proposer: 'ArtisanVerde' },
];

const ProposalsPage = () => (
    <>
        <Head><title>Codex Amendment Proposals</title></Head>
        <div className={styles.pageContainer}>
             <header className={styles.header}>
                <h1 className={styles.title}>Constitutional Assembly</h1>
                <p className={styles.subtitle}>The forum for debating and proposing amendments to the Chromatic Codex.</p>
            </header>
            <div className={styles.proposalList}>
                {mockProposals.map(prop => (
                    <div key={prop.id} className={styles.proposalCard}>
                        <div>
                            <span className={`${styles.status} ${styles[prop.status.toLowerCase()]}`}>{prop.status}</span>
                            <h2 className={styles.proposalTitle}>{prop.title}</h2>
                            <p className={styles.proposer}>Proposed by {prop.proposer}</p>
                        </div>
                        <button className={styles.viewButton}>View & Debate</button>
                    </div>
                ))}
            </div>
        </div>
    </>
);

ProposalsPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default ProposalsPage;