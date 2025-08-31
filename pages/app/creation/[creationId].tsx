// pages/app/creation/[creationId].tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../styles/CreationExhibition.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for creations
const creationDatabase = {
  'cr01': {
    title: 'Dusk on the Frontier',
    creator: 'Vectorios',
    imageUrl: 'https://placehold.co/1200x675/8E44AD/FFFFFF?text=Dusk+on+the+Frontier',
    description: 'A palette inspired by the fading light over a vast, unexplored landscape. It combines the warmth of the last sun rays with the cool tones of the coming night.',
    colorsUsed: [
      { hex: '#FF5733', name: 'Crimson Blaze' },
      { hex: '#8E44AD', name: 'Royal Amethyst' },
      { hex: '#D35400', name: 'Pumpkin Spice' },
      { hex: '#34495E', name: 'Asphalt' },
    ]
  },
};

const CreationExhibitionPage = () => {
    const router = useRouter();
    const { creationId } = router.query;
    
    const creation = typeof creationId === 'string' ? creationDatabase[creationId] : null;

    if (!creation) {
        return <div>Loading or Creation not found...</div>;
    }

    return (
        <>
            <Head>
                <title>Exhibition: {creation.title}</title>
            </Head>
            <div className={styles.pageContainer}>
                <main className={styles.mainContent}>
                    <div className={styles.artworkContainer}>
                        <img src={creation.imageUrl} alt={creation.title} />
                    </div>
                    <h1 className={styles.title}>{creation.title}</h1>
                    <Link href={`/app/users/${creation.creator}`} legacyBehavior>
                        <a className={styles.creatorLink}>by <span>{creation.creator}</span></a>
                    </Link>
                    <p className={styles.description}>{creation.description}</p>
                </main>
                <aside className={styles.sidebar}>
                    <h2>Sovereign Colors Used</h2>
                    <div className={styles.colorList}>
                        {creation.colorsUsed.map(color => (
                            <Link key={color.hex} href={`/app/color/${color.hex.substring(1)}`} legacyBehavior>
                                <a className={styles.colorItem}>
                                    <div className={styles.swatch} style={{ backgroundColor: color.hex }} />
                                    <div>
                                        <div>{color.name}</div>
                                        <div className={styles.hexCode}>{color.hex}</div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                    {/* Comments section would go here */}
                    <h2>Comments</h2>
                    <p>Community feedback coming soon.</p>
                </aside>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
CreationExhibitionPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default CreationExhibitionPage;