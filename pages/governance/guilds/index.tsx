// pages/governance/guilds/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Factions.module.css'; // Reuse faction styles
import AppLayout from '../../../components/app/AppLayout';

const mockGuilds = [
  { id: 'g01', slug: 'curators-guild', name: 'The Curators\' Guild', motto: 'Stewards of the National Gallery.', memberCount: 35, emblemColor: '#4A90E2' },
  { id: 'g02', slug: 'artisans-union', name: 'The Artisans\' Union', motto: 'Masters of materialization.', memberCount: 112, emblemColor: '#D35400' },
  { id: 'g03', slug: 'verse-cartographers', name: 'Verse Cartographers', motto: 'Mapping the trends of the spectrum.', memberCount: 42, emblemColor: '#2ECC71' },
];

const GuildsPage = () => (
    <>
        <Head><title>Professional Orders - Guild Directory</title></Head>
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Professional Orders</h1>
                <p className={styles.subtitle}>Recognized guilds for certified professionals within the Verse.</p>
            </header>
            <div className={styles.factionGrid}>
                {mockGuilds.map((guild) => (
                    <Link key={guild.id} href={`/governance/guilds/${guild.slug}`} legacyBehavior>
                        <a className={styles.factionCard}>
                            <div className={styles.emblem} style={{ backgroundColor: guild.emblemColor }} />
                            <h3 className={styles.name}>{guild.name}</h3>
                            <p className={styles.motto}>"{guild.motto}"</p>
                            <div className={styles.stats}>{guild.memberCount} Members</div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </>
);
GuildsPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default GuildsPage;