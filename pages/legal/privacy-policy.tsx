// pages/legal/privacy-policy.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Static.module.css';

const PrivacyPage = () => (
     <div className={styles.pageContainer}>
        <Head><title>Privacy Policy</title></Head>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.content}>
            <h2>Data We Collect</h2>
            <p>To provide the Service, we collect information you provide directly to us, such as your email address and username. Public actions, such as color claims, market transactions, and posts in the Social Agora, are permanently recorded and associated with your Guardian name.</p>
            <h2>Data Security</h2>
            <p>We implement robust security measures to protect your personal information. However, no system is impenetrable. Publicly visible information is, by its nature, accessible to all.</p>
        </div>
    </div>
);
export default PrivacyPage;