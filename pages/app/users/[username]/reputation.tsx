// pages/app/users/[username]/reputation.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AppLayout from '../../../../components/app/AppLayout';
import profileStyles from '../../../../styles/UserProfile.module.css'; // Reuse styles
import cardStyles from '../../../../styles/Dashboard.module.css';

const mockUsers = [ { id: 'u01', name: 'Vectorios', faction: { name: 'The Chromatic Order', slug: 'chromatic-order' }, stats: { colors: 17, creations: 5, followers: 142 }, headerUrl: '' } ];

const ReputationPage = () => {
    const router = useRouter();
    const { username } = router.query;
    const user = mockUsers.find(u => u.name === username);
    if (!user) return <div>Loading...</div>;
    const activeTab = router.asPath.split('/').pop();

    return (
        <>
            <Head><title>{user.name}'s Reputation</title></Head>
            <div>
                <header className={profileStyles.profileHeader} />
                <div className={profileStyles.profileContent}>
                    <div className={profileStyles.mainInfo}>...</div>
                    <div className={profileStyles.statsBar}>...</div>
                     <nav className={profileStyles.subNavBar}>
                        <Link href={`/app/users/${user.name}`} className={`${profileStyles.navLink}`}>Overview</Link>
                        <Link href={`/app/users/${user.name}/collection`} className={`${profileStyles.navLink}`}>Collection</Link>
                        <Link href={`/app/users/${user.name}/creations`} className={`${profileStyles.navLink}`}>Creations</Link>
                        <Link href={`/app/users/${user.name}/reputation`} className={`${profileStyles.navLink} ${profileStyles.active}`}>Reputation</Link>
                    </nav>
                    <div className={cardStyles.grid}>
                        <div className={cardStyles.card}><h2 className={cardStyles.cardTitle}>Codex Standing</h2><span className={cardStyles.statValue}>Exemplary</span></div>
                        <div className={cardStyles.card}><h2 className={cardStyles.cardTitle}>Market Reliability</h2><span className={cardStyles.statValue}>99.8%</span></div>
                        <div className={cardStyles.card}><h2 className={cardStyles.cardTitle}>Faction Loyalty</h2><span className={cardStyles.statValue}>Vanguard</span></div>
                    </div>
                </div>
            </div>
        </>
    );
};
ReputationPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default ReputationPage;