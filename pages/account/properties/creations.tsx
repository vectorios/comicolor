// pages/account/properties/creations.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/Discover.module.css';

const myCreations = [
    { id: 'cr01', title: 'Dusk on the Frontier', type: 'Palette', imageUrl: 'https://placehold.co/600x400/8E44AD/FFFFFF?text=Palette' },
    { id: 'cr02', title: 'Autumn Forge', type: 'Moodboard', imageUrl: 'https://placehold.co/600x400/D35400/FFFFFF?text=Moodboard' },
];

const CreationsPage = () => (
    <>
        <Head><title>My Creations</title></Head>
        <div className={styles.galleryGrid}>
            {myCreations.map((creation) => (
                <Link key={creation.id} href={`/app/creation/${creation.id}`} legacyBehavior>
                <a className={styles.creationCard}>
                    <div className={styles.cardImage}><img src={creation.imageUrl} alt={creation.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{creation.title}</h3>
                        <p className={styles.cardCreator}>Type: <span className={styles.creatorHighlight}>{creation.type}</span></p>
                    </div>
                </a>
                </Link>
            ))}
        </div>
    </>
);
CreationsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default CreationsPage;