// pages/legal/community-guidelines.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Static.module.css';

const CommunityGuidelinesPage = () => (
     <div className={styles.pageContainer}>
        <Head><title>Community Guidelines</title></Head>
        <h1 className={styles.title}>Community Guidelines</h1>
        <div className={styles.content}>
            <h2>Respect the Individual</h2>
            <p>Harassment, hate speech, and personal attacks are strictly forbidden. Engage with other Guardians with the respect due to a fellow citizen.</p>
            <h2>Uphold the Codex</h2>
            <p>All interactions within the Verse are subject to the Chromatic Codex. Attempts to exploit, defraud, or manipulate the systems of the Verse will be met with swift judicial action.</p>
        </div>
    </div>
);
export default CommunityGuidelinesPage;