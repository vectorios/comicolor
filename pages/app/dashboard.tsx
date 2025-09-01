// pages/app/dashboard.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { jwtVerify } from 'jose';
import styles from '../../styles/Dashboard.module.css';
import AppLayout from '../../components/app/AppLayout';
import { supabase } from '../../lib/supabaseClient';

// Type pour les données passées à la page
interface DashboardProps {
  user: {
    username: string;
  };
  stats: {
    colorCount: number;
    creationCount: number;
  };
}

const DashboardPage: NextPage<DashboardProps> = ({ user, stats }) => {

  return (
    <>
      <Head>
        <title>Dashboard - The Guardian's Desk</title>
      </Head>
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome, {user.username}</h1>
          <p className={styles.subtitle}>This is your personal command center. What will you create today?</p>
        </header>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>My Properties</h2>
            <div>
              <span className={styles.statValue}>{stats.colorCount}</span>
              <span className={styles.statLabel}> Sovereign Colors</span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <span className={styles.statValue}>{stats.creationCount}</span>
              <span className={styles.statLabel}> Creations</span>
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Market Watch</h2>
            <div>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}> Active Listings</span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}> Active Bids</span>
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Quick Actions</h2>
            <div className={styles.quickActionsList}>
              <Link href="/app/registry/public-domain" legacyBehavior><a className={styles.actionButton}>Claim a New Color</a></Link>
              <Link href="/app/market/create-listing" legacyBehavior><a className={styles.actionButton}>Create a Listing</a></Link>
              <Link href="/app/verse/create-post" legacyBehavior><a className={styles.actionButton}>Write a Post</a></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

// Fonction qui s'exécute côté serveur avant de rendre la page
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const token = req.cookies.auth_token;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!token || !JWT_SECRET) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    
    const userId = payload.userId as string;
    const username = payload.username as string;

    if (!userId || !username) throw new Error('Invalid token payload');

    // Exécuter les requêtes vers Supabase en parallèle
    const [colorRes, creationRes] = await Promise.all([
      supabase.from('colors').select('hex_code', { count: 'exact', head: true }).eq('owner_id', userId),
      supabase.from('creations').select('id', { count: 'exact', head: true }).eq('creator_id', userId)
    ]);

    if (colorRes.error) throw new Error(`Failed to fetch color count: ${colorRes.error.message}`);
    if (creationRes.error) throw new Error(`Failed to fetch creation count: ${creationRes.error.message}`);

    // Passer les données réelles en props à la page
    return {
      props: {
        user: {
          username: username,
        },
        stats: {
          colorCount: colorRes.count ?? 0,
          creationCount: creationRes.count ?? 0,
        }
      },
    };

  } catch (error) {
    console.error("Dashboard getServerSideProps Error:", error);
    return { redirect: { destination: '/login', permanent: false } };
  }
};

export default DashboardPage;