// pages/app/users/[username]/collection.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
// We reuse the CSS from the user profile and the registry
import profileStyles from '../../../../styles/UserProfile.module.css';
import registryStyles from '../../../../styles/Registry.module.css';
import AppLayout from '../../../../components/app/AppLayout';

// Mock data
const mockUsers = [
  { 
    id: 'u01', 
    name: 'Vectorios', 
    faction: { name: 'The Chromatic Order', slug: 'chromatic-order' }, 
    stats: { colors: 17, creations: 5, followers: 142 },
    headerUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    collection: [
      { hex: '#FF5733', name: 'Crimson Blaze' },
      { hex: '#8E44AD', name: 'Royal Amethyst' },
      { hex: '#D35400', name: 'Pumpkin Spice' },
      // ... add more colors
    ]
  },
   { 
    id: 'u02', 
    name: 'NeonDreamer', 
    faction: { name: 'Aether Weavers', slug: 'aether-weavers' }, 
    stats: { colors: 45, creations: 22, followers: 310 },
    headerUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    collection: [
        { hex: '#3357FF', name: 'Cobalt Dream' },
        { hex: '#FF00FF', name: 'Magenta Shock' },
    ]
  },
];

// Helper function from registry page
const getTextColorForBackground = (hexColor: string) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? registryStyles.darkText : registryStyles.lightText;
};

const CollectionPage = () => {
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
                <title>{user.name}'s Collection - ColorVerse</title>
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
                    <div className={registryStyles.colorGrid}>
                        {user.collection.map((color) => (
                            <Link key={color.hex} href={`/app/color/${color.hex.substring(1)}`} legacyBehavior>
                            <a className={registryStyles.colorCard}>
                                <div className={registryStyles.swatch} style={{ backgroundColor: color.hex }}>
                                <span className={getTextColorForBackground(color.hex)}>{color.name}</span>
                                </div>
                                <div className={registryStyles.info}>
                                <div className={registryStyles.hexCode}>{color.hex}</div>
                                <div className={registryStyles.owner}>Guardian: {user.name}</div>
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
CollectionPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default CollectionPage;
