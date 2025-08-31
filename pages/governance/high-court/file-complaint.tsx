// pages/governance/high-court/file-complaint.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Forms.module.css'; // We'll create a shared form style
import AppLayout from '../../../components/app/AppLayout';

const FileComplaintPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Complaint filed successfully. Case #HC-2025-018 has been created.');
    };

    return (
        <>
            <Head><title>File a Complaint - High Court</title></Head>
            <div className={styles.formPageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>File a Formal Complaint</h1>
                    <p className={styles.subtitle}>Submit a grievance for review by the Moderator Council. Please be as detailed as possible.</p>
                </header>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="defendant" className={styles.label}>Guardian(s) Accused</label>
                        <input type="text" id="defendant" className={styles.input} placeholder="Enter username, e.g., 'PixelThief'" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="codexArticle" className={styles.label}>Codex Article(s) Violated</label>
                        <input type="text" id="codexArticle" className={styles.input} placeholder="e.g., 'Article 2.2.1 - Color Duplication'" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="statement" className={styles.label}>Detailed Statement</label>
                        <textarea id="statement" className={styles.textarea} required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit Complaint to the Court</button>
                </form>
            </div>
        </>
    );
};

FileComplaintPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default FileComplaintPage;