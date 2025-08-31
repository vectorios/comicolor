// pages/for-developers.tsx
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Docs.module.css';

const ForDevelopersPage = () => (
    <>
        <Head><title>Developer Portal - ColorVerse API</title></Head>
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Digital Architects' Guild</h1>
                <p className={styles.subtitle}>Access the public API and build on top of the ColorVerse ecosystem.</p>
            </header>
            <div className={styles.content}>
                <h2>Authentication</h2>
                <p>To get started, generate an API key from your Corporate Dashboard. All requests must include an `Authorization` header with your Bearer token.</p>
                <h2>Endpoints</h2>
                <h3>Get Color Data</h3>
                <p>Retrieve public information for any Sovereign Color.</p>
                <div className={styles.codeBlock}>
                    <span className={styles.keyword}>GET</span> /api/v1/color/<span className={styles.number}>&#123;hexCode&#125;</span>
                </div>
                <h3>Example Response</h3>
                <div className={styles.codeBlock}>
                    <code>{`{
  "hex": "FF5733",
  "name": "Crimson Blaze",
  "owner": {
    "username": "Vectorios",
    "profile_url": "/app/users/Vectorios"
  },
  "is_brandlocked": false,
  "genesis_date": "2023-01-20T14:30:00Z"
}`}</code>
                </div>
            </div>
        </div>
    </>
);
export default ForDevelopersPage;