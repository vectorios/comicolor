// pages/app/users/search.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/UserSearch.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for users
const mockUsers = [
  { id: 'u01', name: 'Vectorios', faction: { name: 'The Chromatic Order', slug: 'chromatic-order' }, avatarUrl: '' },
  { id: 'u02', name: 'NeonDreamer', faction: { name: 'Aether Weavers', slug: 'aether-weavers' }, avatarUrl: '' },
  { id: 'u03', name: 'ArtisanVerde', faction: null, avatarUrl: '' },
  { id: 'u04', name: 'Greyscale', faction: { name: 'The Monochromes', slug: 'the-monochromes' }, avatarUrl: '' },
  { id: 'u05', name: 'PixelPerfect', faction: null, avatarUrl: '' },
];

const UserSearchPage = () => {
  return (
    <>
      <Head>
        <title>Guardian Directory - ColorVerse</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Directory of Guardians</h1>
          <p className={styles.subtitle}>Find and connect with other citizens of the Verse.</p>
        </header>

        <section className={styles.searchContainer}>
          <input type="search" className={styles.searchInput} placeholder="Search for a Guardian..." />
        </section>

        <section className={styles.resultsList}>
          {mockUsers.map((user) => (
            <Link key={user.id} href={`/app/users/${user.name}`} legacyBehavior>
              <a className={styles.userCard}>
                <div className={styles.avatar} />
                <div className={styles.userInfo}>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.faction}>
                    {user.faction ? (
                      <Link href={`/app/factions/${user.faction.slug}`} legacyBehavior>
                        <a className={styles.factionLink} onClick={(e) => e.stopPropagation()}>{user.faction.name}</a>
                      </Link>
                    ) : (
                      'Unaffiliated'
                    )}
                  </div>
                </div>
                <button className={styles.followButton} onClick={(e) => {e.preventDefault(); alert(`Following ${user.name}!`)}}>
                    Follow
                </button>
              </a>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
UserSearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default UserSearchPage;