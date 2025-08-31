// pages/governance/legislative/ballots.tsx
// This is very similar to proposals, but with voting actions
import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Proposals.module.css'; // Reuse proposal styles
import AppLayout from '../../../components/app/AppLayout';

const mockBallots = [
    { id: 'CVA-027', title: 'Proposal for a "Vintage" Color Tag', status: 'Voting', proposer: 'NeonDreamer' },
    { id: 'CVA-025', title: 'New Regulations for Print-on-Demand Quality', status: 'Voting', proposer: 'StudioPrintWorks' },
];

const BallotsPage = () => (
    <>
        <Head><title>Active Ballots</title></Head>
        <div className={styles.pageContainer}>
             <header className={styles.header}>
                <h1 className={styles.title}>Secure Voting Interface</h1>
                <p className={styles.subtitle}>Cast your vote on active ballots to shape the future of the Verse.</p>
            </header>
            <div className={styles.proposalList}>
                {mockBallots.map(ballot => (
                    <div key={ballot.id} className={styles.proposalCard}>
                        <div>
                            <span className={`${styles.status} ${styles.voting}`}>{ballot.status}</span>
                            <h2 className={styles.proposalTitle}>{ballot.title}</h2>
                            <p className={styles.proposer}>Proposed by {ballot.proposer}</p>
                        </div>
                        <button className={styles.voteButton}>Cast Your Vote</button>
                    </div>
                ))}
            </div>
        </div>
    </>
);

BallotsPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default BallotsPage;