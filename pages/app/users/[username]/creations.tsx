// pages/app/users/[username]/creations.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
// Reusing CSS from existing pages
import profileStyles from '../../../../styles/UserProfile.module.css';
import discoverStyles from '../../../../styles/Discover.module.css';
import AppLayout from '../../../../components/app/AppLayout';

// Mock data with a new 'creations' field
const mockUsers = [
  { 
    id: 'u01', 
    name: 'Vectorios', 
    faction: { name: 'The Chromatic Order', slug: 'chromatic-order' }, 
    stats: { colors: 17, creations: 5, followers: 142 },
    headerUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    creations: [
      { id: 'cr01', title: 'Dusk on the Frontier', type: 'Palette', imageUrl: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Palette' },
      { id: 'cr02', title: 'Autumn Forge', type: 'Moodboard', imageUrl: 'https://placehold.co/600x400/D35400/FFFFFF?text=Moodboard' },
    ]
  },
  { 
    id: 'u02', 
    name: 'NeonDreamer', 
    faction: { name: 'Aether Weavers', slug: 'aether-weavers' }, 
    stats: { colors: 45, creations: 22, followers: 310 },
    headerUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    creations: [
       { id: 'cr03', title: 'Cyberpunk Alley', type: 'Digital Art', imageUrl: 'https://placehold.co/600x400/3357FF/FFFFFF?text=Digital+Art' },
       { id: 'cr04', title: '80s Synthwave', type: 'Palette', imageUrl: 'https://placehold.co/600x400/FF00FF/FFFFFF?text=Palette' },
       { id: 'cr05', title: 'Night Drive', type: '3D Render', imageUrl: 'https://placehold.co/600x400/1a1a1a/FFFFFF?text=3D+Render' },
    ]
  },
];

const CreationsPage = () => {
    const router = useRouter();
    const { username } = router.query;
    
    const user = mockUsers.find(u => u.name === username);

    if (!user) {
        return <div>Loading or Guardian not found...</div>;
    }

    const activeTab = router.asPath.split('/').pop();

    return (
        <>
            <Head>
                <title>{user.name}'s Creations - ColorVerse</title>
            </Head>
            <div>
                 {/* Replicated Profile Header */}
                <header className={profileStyles.profileHeader} style={{ backgroundImage: `url(${user.headerUrl})` }} />
                <div className={profileStyles.profileContent}>
                    <div className={profileStyles.mainInfo}>
                        <div className={profileStyles.identity}>
                            <div className={profileStyles.avatar} />
                            <div className={profileStyles.nameGroup}>
                                <h1>{user.name}</h1>
                                <p>Member of the <Link href={`/app/factions/${user.faction.slug}`}>{user.faction.name}</Link></p>
                            </div>
                        </div>
                        <button className={profileStyles.followButton}>Follow</button>
                    </div>
                    <div className={profileStyles.statsBar}>
                        <div className={profileStyles.statItem}><div className={profileStyles.statValue}>{user.stats.colors}</div><div className={profileStyles.statLabel}>Colors</div></div>
                        <div className={profileStyles.statItem}><div className={profileStyles.statValue}>{user.stats.creations}</div><div className={profileStyles.statLabel}>Creations</div></div>
                        <div className={profileStyles.statItem}><div className={profileStyles.statValue}>{user.stats.followers}</div><div className={profileStyles.statLabel}>Followers</div></div>
                    </div>
                    <nav className={profileStyles.subNavBar}>
                        <Link href={`/app/users/${user.name}`} className={`${profileStyles.navLink} ${activeTab === user.name ? profileStyles.active : ''}`}>Overview</Link>
                        <Link href={`/app/users/${user.name}/collection`} className={`${profileStyles.navLink} ${activeTab === 'collection' ? profileStyles.active : ''}`}>Collection</Link>
                        <Link href={`/app/users/${user.name}/creations`} className={`${profileStyles.navLink} ${activeTab === 'creations' ? profileStyles.active : ''}`}>Creations</Link>
                        <Link href={`/app/users/${user.name}/reputation`} className={`${profileStyles.navLink} ${activeTab === 'reputation' ? profileStyles.active : ''}`}>Reputation</Link>
                    </nav>

                    {/* --- Page-specific Content --- */}
                    <div className={discoverStyles.galleryGrid}>
                        {user.creations.map((creation) => (
                           <Link key={creation.id} href={`/app/creation/${creation.id}`} legacyBehavior>
                            <a className={discoverStyles.creationCard}>
                                <div className={discoverStyles.cardImage}>
                                    <img src={creation.imageUrl} alt={creation.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className={discoverStyles.cardContent}>
                                <h3 className={discoverStyles.cardTitle}>{creation.title}</h3>
                                <p className={discoverStyles.cardCreator}>
                                    Type: <span className={discoverStyles.creatorHighlight}>{creation.type}</span>
                                </p>
                                </div>
                            </a>
                           </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
CreationsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default CreationsPage;