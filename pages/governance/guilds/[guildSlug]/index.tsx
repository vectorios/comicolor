// pages/governance/guilds/[guildSlug]/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../../styles/FactionProfile.module.css'; // Reuse faction profile styles
import AppLayout from '../../../components/app/AppLayout';

const mockGuilds = [
  { 
    id: 'g01', 
    slug: 'curators-guild', 
    name: 'The Curators\' Guild', 
    motto: 'Stewards of the National Gallery.', 
    memberCount: 35, 
    emblemColor: '#4A90E2',
    headerImage: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1674&auto=format&fit=crop',
    manifesto: 'Our Guild is responsible for the curation and maintenance of the National Gallery. We uphold the highest standards of artistic merit and historical significance to ensure the gallery reflects the very best of the Verse.',
    members: [ { name: 'CuratorA', role: 'Guild Master' }, { name: 'CuratorB', role: 'Member' } ]
  },
];

const GuildProfilePage = () => {
    const router = useRouter();
    const { guildSlug } = router.query;
    const guild = mockGuilds.find(g => g.slug === guildSlug);
    if (!guild) return <div>Loading...</div>;

    return (
        <>
            <Head><title>{guild.name} - Guild Profile</title></Head>
             <div>
                <header className={styles.profileHeader} style={{ backgroundImage: `url(${guild.headerImage})` }} />
                <div className={styles.profileContent}>
                    <div className={styles.factionInfo}>
                        <div className={styles.emblem} style={{ backgroundColor: guild.emblemColor }} />
                        <div className={styles.titleGroup}><h1>{guild.name}</h1><p>"{guild.motto}"</p></div>
                    </div>
                     <div className={styles.mainLayout}>
                        <main className={styles.manifesto}>
                            <h2>Charter & Responsibilities</h2>
                            <p>{guild.manifesto}</p>
                        </main>
                        <aside className={styles.sidebar}>
                            <button className={styles.joinButton}>Apply to Join</button>
                            <h2>Members ({guild.memberCount})</h2>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};
GuildProfilePage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default GuildProfilePage;