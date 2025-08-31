// pages/governance/high-court/index.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/HighCourt.module.css';
import AppLayout from '../../../components/app/AppLayout';

const HighCourtPage = () => {
  return (
    <>
      <Head>
        <title>The Chromatic High Court - ColorVerse Governance</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Chromatic High Court</h1>
          <p className={styles.subtitle}>
            The supreme judicial body of the Verse, responsible for interpreting the Codex and adjudicating high-level disputes.
          </p>
        </header>

        <main className={styles.actionGrid}>
          <Link href="/governance/high-court/file-complaint" legacyBehavior>
            <a className={styles.actionCard}>
              <div className={styles.icon}>✍️</div>
              <h2 className={styles.cardTitle}>File a Complaint</h2>
              <p className={styles.cardDescription}>Formally submit a grievance or report a violation of the Codex for judicial review.</p>
            </a>
          </Link>
          <Link href="/governance/high-court/case-registry" legacyBehavior>
            <a className={styles.actionCard}>
              <div className={styles.icon}>🏛️</div>
              <h2 className={styles.cardTitle}>Case Registry</h2>
              <p className={styles.cardDescription}>Browse the public record of all past and present judicial cases brought before the High Court.</p>
            </a>
          </Link>
          <Link href="/governance/high-court/my-cases" legacyBehavior>
            <a className={styles.actionCard}>
              <div className={styles.icon}>📁</div>
              <h2 className={styles.cardTitle}>My Cases</h2>
              <p className={styles.cardDescription}>Track the status and review the documentation for all cases in which you are involved.</p>
            </a>
          </Link>
        </main>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
HighCourtPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HighCourtPage;