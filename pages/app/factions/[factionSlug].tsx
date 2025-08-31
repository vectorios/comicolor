// pages/app/factions/[factionSlug].tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/FactionProfile.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for factions - this would normally be fetched from an API based on the slug
const mockFactions = [
  { 
    id: 'f01', 
    slug: 'chromatic-order', 
    name: 'The Chromatic Order', 
    motto: 'Uniting the spectrum, one color at a time.', 
    memberCount: 125, 
    emblemColor: '#F1C40F',
    headerImage: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    manifesto: 'We believe that all colors are interconnected. Our purpose is to explore the relationships between hues and build palettes that tell powerful stories. We value collaboration and harmony above all.',
    members: [
        { name: 'ColoristPrime', role: 'Archon' },
        { name: 'HueMaster', role: 'Vanguard' },
        { name: 'ChromaCadet', role: 'Guardian' },
    ]
  },
  // Add other factions here if you want to be able to navigate to them
  { 
    id: 'f02', 
    slug: 'the-monochromes', 
    name: 'The Monochromes', 
    motto: 'Power in purity, strength in simplicity.', 
    memberCount: 78, 
    emblemColor: '#BDC3C7',
    headerImage: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    manifesto: 'Value is found not in infinite variety, but in the subtle nuances of light and shadow. We champion the power of grayscale and minimalist design. For us, less is more.',
    members: [
        { name: 'Greyscale', role: 'Matriarch' },
        { name: 'Shade', role: 'Vanguard' },
        { name: 'Ash', role: 'Guardian' },
    ]
  },
];

const FactionProfilePage = () => {
    const router = useRouter();
    const { factionSlug } = router.query;
    
    const faction = mockFactions.find(f => f.slug === factionSlug);

    if (!faction) {
        return <div>Loading or Faction not found...</div>;
    }

    return (
        <>
            <Head>
                <title>{faction.name} - Faction Profile</title>
            </Head>
            <div>
                <header className={styles.profileHeader} style={{ backgroundImage: `url(${faction.headerImage})` }} />
                <div className={styles.profileContent}>
                    <div className={styles.factionInfo}>
                        <div className={styles.emblem} style={{ backgroundColor: faction.emblemColor }} />
                        <div className={styles.titleGroup}>
                            <h1>{faction.name}</h1>
                            <p>"{faction.motto}"</p>
                        </div>
                    </div>

                    <div className={styles.mainLayout}>
                        <main className={styles.manifesto}>
                            <h2>Our Manifesto</h2>
                            <p>{faction.manifesto}</p>
                        </main>
                        <aside className={styles.sidebar}>
                            <button className={styles.joinButton}>Join Faction</button>
                            <h2>Members ({faction.memberCount})</h2>
                            <ul className={styles.memberList}>
                                {faction.members.map(member => (
                                    <li key={member.name}>
                                        <Link href={`/app/users/${member.name}`} legacyBehavior>
                                            <a className={styles.memberItem}>
                                                <div className={styles.avatar} />
                                                <div>
                                                    <div className={styles.username}>{member.name}</div>
                                                    <div className={styles.role}>{member.role}</div>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
FactionProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default FactionProfilePage;