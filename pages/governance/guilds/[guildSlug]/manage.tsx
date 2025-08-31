// pages/governance/guilds/[guildSlug]/manage.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../../styles/FactionManage.module.css'; // Reuse faction management styles
import AppLayout from '../../../components/app/AppLayout';

const mockGuildData = {
  slug: 'curators-guild',
  name: 'The Curators\' Guild',
  members: [
    { name: 'CuratorA', role: 'Guild Master', joined: '2023-03-10' },
    { name: 'CuratorB', role: 'Member', joined: '2023-06-05' },
  ],
};

const GuildManagePage = () => {
    const router = useRouter();
    const { guildSlug } = router.query;
    const guild = mockGuildData;
    if (!guild || guild.slug !== guildSlug) return <div>Loading or no permission...</div>;

    return (
        <>
            <Head><title>Manage {guild.name}</title></Head>
             <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{guild.name}</h1>
                    <p className={styles.subtitle}>Guild Management Dashboard</p>
                </header>
                 <div className={styles.dashboardContainer}>
                    <nav className={styles.tabContainer}>
                        <button className={`${styles.tabButton} ${styles.active}`}>Membership</button>
                        <button className={styles.tabButton}>Finances</button>
                    </nav>
                     <div className={styles.tabContent}>
                         <table className={styles.table}>
                            <thead><tr><th>Member</th><th>Role</th><th>Joined On</th></tr></thead>
                            <tbody>
                                {guild.members.map(member => (
                                    <tr key={member.name}>
                                        <td>{member.name}</td><td>{member.role}</td><td>{member.joined}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
GuildManagePage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default GuildManagePage;