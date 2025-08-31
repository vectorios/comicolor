// pages/admin/codex/editor.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/Forms.module.css';

const CodexEditorPage = () => (
    <>
        <Head><title>Codex Management</title></Head>
        <div className={styles.formPageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Codex Editor</h1></header>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label htmlFor="article" className={styles.label}>Select Article to Edit</label>
                    <select id="article" className={styles.input}><option>Article 2.2.1 - Color Duplication</option></select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="content" className={styles.label}>Article Content (Markdown)</label>
                    <textarea id="content" className={styles.textarea} style={{minHeight: '400px'}}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Publish Changes</button>
            </form>
        </div>
    </>
);
CodexEditorPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default CodexEditorPage;