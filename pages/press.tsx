// pages/press.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Static.module.css';

const PressPage = () => (
    <div className={styles.pageContainer}>
        <Head><title>Press - ColorVerse</title></Head>
        <h1 className={styles.title}>The Dispatch Office</h1>
        <div className={styles.content}>
            <h2>About ColorVerse</h2>
            <p>ColorVerse is a digital nation-state built around the concept of "Sovereign Colors," where every color in the 16.7 million sRGB spectrum can be owned, traded, and utilized as a unique digital asset. It combines a creative economy, a social platform, and a system of governance to empower artists, designers, and brands.</p>
            <h2>Press Kit</h2>
            <p>Our official press kit contains high-resolution logos, platform screenshots, executive team headshots, and detailed company information. For all media inquiries, please contact <a href="mailto:press@colorverse.io">press@colorverse.io</a>.</p>
            <button className="ctaButtonShared" style={{padding: '1rem 2rem'}}>Download Press Kit (ZIP)</button>
        </div>
    </div>
);
export default PressPage;