// pages/app/users/[username].tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../styles/UserProfile.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for users, including stats
const mockUsers = [
  { 
    id: 'u01', 
    name: 'Vectorios', 
    faction: { name: 'The Chromatic Order', slug: 'chromatic-order' }, 
    stats: { colors: 17, creations: 5, followers: 142 },
    headerUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
  },
  { 
    id: 'u02', 
    name: 'NeonDreamer', 
    faction: { name: 'Aether Weavers', slug: 'aether-weavers' }, 
    stats: { colors: 45, creations: 22, followers: 310 },
    headerUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600'
  },
];

const UserProfilePage = () => {
    const router = useRouter();
    const { username } = router.query;
    
    const user = mockUsers.find(u => u.name === username);

    if (!user) {
        return <div>Loading or Guardian not found...</div>;
    }

    // Determine which sub-page is active from the full path
    const activeTab = router.asPath.split('/').pop();

    return (
        <>
            <Head>
                <title>{user.name}'s Profile - ColorVerse</title>
            </Head>
            <div>
                <header className={styles.profileHeader} style={{ backgroundImage: `url(${user.headerUrl})` }} />
                <div className={styles.profileContent}>
                    <div className={styles.mainInfo}>
                        <div className={styles.identity}>
                            <div className={styles.avatar} />
                            <div className={styles.nameGroup}>
                                <h1>{user.name}</h1>
                                <p>Member of the <Link href={`/app/factions/${user.faction.slug}`}>{user.faction.name}</Link></p>
                            </div>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </div>

                    <div className={styles.statsBar}>
                        <div className={styles.statItem}><div className={styles.statValue}>{user.stats.colors}</div><div className={styles.statLabel}>Colors</div></div>
                        <div className={styles.statItem}><div className={styles.statValue}>{user.stats.creations}</div><div className={styles.statLabel}>Creations</div></div>
                        <div className={styles.statItem}><div className={styles.statValue}>{user.stats.followers}</div><div className={styles.statLabel}>Followers</div></div>
                    </div>

                    <nav className={styles.subNavBar}>
                        {/* We use `username` as the active tab if no other is specified */}
                        <Link href={`/app/users/${user.name}`} className={`${styles.navLink} ${activeTab === user.name ? styles.active : ''}`}>Overview</Link>
                        <Link href={`/app/users/${user.name}/collection`} className={`${styles.navLink} ${activeTab === 'collection' ? styles.active : ''}`}>Collection</Link>
                        <Link href={`/app/users/${user.name}/creations`} className={`${styles.navLink} ${activeTab === 'creations' ? styles.active : ''}`}>Creations</Link>
                        <Link href={`/app/users/${user.name}/reputation`} className={`${styles.navLink} ${activeTab === 'reputation' ? styles.active : ''}`}>Reputation</Link>
                    </nav>

                    <div className={styles.profileBody}>
                        {/* The content for collection, creations, etc., would be rendered here by nested routes */}
                        <p>Overview content for {user.name} will be displayed here.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
UserProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default UserProfilePage;