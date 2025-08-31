// pages/for-brands.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Pricing.module.css'; // Reuse pricing styles for consistency

const ForBrandsPage = () => (
    <>
        <Head><title>For Brands - ColorVerse</title></Head>
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Corporate Consulate</h1>
                <p className={styles.subtitle}>Integrate your brand into the fabric of the Verse. Connect with a dedicated community of creators, artists, and designers.</p>
            </header>
            <div className={styles.pricingGrid}>
                <div className={styles.planCard}>
                    <h2 className={styles.planName}>Brandlock™ a Color</h2>
                    <p className={styles.planDescription}>Secure a Sovereign Color exclusively for your brand's identity. A Brandlocked Color is a permanent, non-transferable asset that ensures your visual identity is protected within the Verse.</p>
                    <Link href="/contact" legacyBehavior><a className={styles.secondaryCta}>Request Consultation</a></Link>
                </div>
                <div className={styles.planCard} style={{borderColor: '#7F00FF'}}>
                    <h2 className={styles.planName}>Launch a Campaign</h2>
                    <p className={styles.planDescription}>Engage the community directly with official bounties, design competitions, and targeted advertising campaigns to boost your brand's presence and reputation among creators.</p>
                    <Link href="/corporate/advertising/create-campaign" legacyBehavior><a className={styles.primaryCta}>Build a Campaign</a></Link>
                </div>
                <div className={styles.planCard}>
                    <h2 className={styles.planName}>API & Integrations</h2>
                    <p className={styles.planDescription}>Leverage the ColorVerse API to build unique applications, verify asset ownership, and connect your existing services directly to the Verse's economy and social graph.</p>
                    <Link href="/for-developers" legacyBehavior><a className={styles.secondaryCta}>View Documentation</a></Link>
                </div>
            </div>
        </div>
    </>
);
export default ForBrandsPage;