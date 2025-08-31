// pages/careers.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Static.module.css';

const CareersPage = () => (
    <div className={styles.pageContainer}>
        <Head><title>Careers - ColorVerse</title></Head>
        <h1 className={styles.title}>The Recruitment Office</h1>
        <div className={styles.content}>
            <h2>Join the Architects of the Verse</h2>
            <p>We are a passionate team of designers, engineers, and strategists building the future of digital ownership and creativity. If you are driven by big ideas and complex challenges, you might be the next Guardian to join our core team.</p>
            <div className={styles.jobListing}>
                <h3 className={styles.jobTitle}>Senior Backend Engineer (Rust)</h3>
                <p className={styles.jobDetails}>Remote | Full-time | Engineering</p>
            </div>
            <div className={styles.jobListing}>
                <h3 className={styles.jobTitle}>Verse Economist & Market Analyst</h3>
                <p className={styles.jobDetails}>Remote | Full-time | Strategy</p>
            </div>
        </div>
    </div>
);
export default CareersPage;