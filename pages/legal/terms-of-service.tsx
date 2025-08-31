// pages/legal/terms-of-service.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Static.module.css';

const TermsPage = () => (
    <div className={styles.pageContainer}>
        <Head><title>Terms of Service</title></Head>
        <h1 className={styles.title}>Terms of Service</h1>
        <div className={styles.content}>
            <h2>1. Acceptance of the Codex</h2>
            <p>By creating an account and becoming a Guardian of ColorVerse ("the Service"), you formally accept and agree to be bound by the terms outlined in this document and the entirety of the Chromatic Codex ("the Codex"), which governs all activity within the Verse.</p>
            <h2>2. Sovereign Color Ownership</h2>
            <p>A "Sovereign Color" is a unique digital asset represented by a hexadecimal code. Upon successful claim or acquisition, you, the Guardian, are granted exclusive rights to the use, trade, and licensing of this asset within the Service, subject to the laws of the Codex.</p>
        </div>
    </div>
);
export default TermsPage;