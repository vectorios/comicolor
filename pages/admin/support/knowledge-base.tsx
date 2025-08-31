// pages/admin/support/knowledge-base.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/Forms.module.css';

const KnowledgeBasePage = () => (
    <>
        <Head><title>Knowledge Base Editor</title></Head>
        <div className={styles.formPageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Knowledge Base Editor</h1></header>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}><label className={styles.label}>Article Title</label><input type="text" className={styles.input} defaultValue="How to list an item on the market" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Content (Markdown)</label><textarea className={styles.textarea} style={{minHeight: '300px'}}></textarea></div>
                <button type="submit" className={styles.submitButton}>Save Article</button>
            </form>
        </div>
    </>
);
KnowledgeBasePage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default KnowledgeBasePage;