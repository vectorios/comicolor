// pages/app/verse/index.tsx

import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Verse.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for posts
const mockPosts = [
  {
    id: 'p001',
    author: 'Vectorios',
    avatarUrl: '/user-avatar.png',
    timestamp: '2h ago',
    content: 'Just claimed this beautiful new palette from the Public Domain. Thinking of naming it "Dusk on the Frontier".',
    attachment: {
      type: 'palette',
      colors: ['#8E44AD', '#D35400', '#FF5733', '#34495E']
    }
  },
  {
    id: 'p002',
    author: 'ArtisanVerde',
    avatarUrl: '/user-avatar.png',
    timestamp: '5h ago',
    content: 'The market for "Forest" type colors is really heating up! Glad I got in early. Anyone else noticing this trend?'
  },
  {
    id: 'p003',
    author: 'NeonDreamer',
    avatarUrl: '/user-avatar.png',
    timestamp: '1d ago',
    content: 'My auction for "Magenta Shock" is ending soon! The current bid is excitingly high. Thanks to everyone participating!'
  }
];

type FeedType = 'following' | 'global' | 'trends';

const VersePage = () => {
  const [activeTab, setActiveTab] = useState<FeedType>('global');

  return (
    <>
      <Head>
        <title>The Social Agora - ColorVerse</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Social Agora</h1>
        </header>

        <div className={styles.controls}>
          <nav className={styles.subNavBar}>
            <button onClick={() => setActiveTab('following')} className={`${styles.navLink} ${activeTab === 'following' ? styles.active : ''}`}>Following</button>
            <button onClick={() => setActiveTab('global')} className={`${styles.navLink} ${activeTab === 'global' ? styles.active : ''}`}>Global</button>
            <button onClick={() => setActiveTab('trends')} className={`${styles.navLink} ${activeTab === 'trends' ? styles.active : ''}`}>Trends</button>
          </nav>
          <Link href="/app/verse/create-post" legacyBehavior>
            <a className={styles.createPostButton}>Create Post</a>
          </Link>
        </div>
        
        <div className={styles.feedContainer}>
          {mockPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.avatar} /> {/* Placeholder for avatar image */}
                <div>
                  <Link href={`/app/users/${post.author}`} legacyBehavior><a className={styles.username}>{post.author}</a></Link>
                  <div className={styles.timestamp}>{post.timestamp}</div>
                </div>
              </div>
              <div className={styles.postContent}>
                <p>{post.content}</p>
              </div>
              {post.attachment && post.attachment.type === 'palette' && (
                <div className={styles.postAttachment}>
                  <div className={styles.palette}>
                    {post.attachment.colors.map(hex => (
                      <div key={hex} className={styles.swatch} style={{ backgroundColor: hex }}></div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
VersePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default VersePage;