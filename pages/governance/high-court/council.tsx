// pages/governance/high-court/council.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Artisans.module.css'; // Reuse the artisan card style
import AppLayout from '../../../components/app/AppLayout';

const mockCouncil = [
    { id: 'mod01', name: 'Justicar Lumen', specialty: 'Chief Moderator, Codex Interpretation', avatarUrl: '' },
    { id: 'mod02', name: 'Aequitas', specialty: 'Market & Economic Disputes', avatarUrl: '' },
    { id: 'mod03', name: 'Veridia', specialty: 'Faction & Inter-Guardian Conflicts', avatarUrl: '' },
];

const CouncilPage = () => (
    <>
        <Head><title>The Moderator Council</title></Head>
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Moderator Council</h1>
                <p className={styles.subtitle}>The appointed guardians who preside over the Chromatic High Court.</p>
            </header>
            <div className={styles.artisanGrid}>
                {mockCouncil.map((member) => (
                    <div key={member.id} className={styles.artisanCard}>
                        <div className={styles.avatar} />
                        <h3 className={styles.name}>{member.name}</h3>
                        <p className={styles.specialty}>{member.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
);

CouncilPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default CouncilPage;