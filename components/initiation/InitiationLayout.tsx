// components/initiation/InitiationLayout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../../styles/Initiation.module.css';

const InitiationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>The Prism Scrutiny - ColorVerse Initiation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </>
  );
};

export default InitiationLayout;