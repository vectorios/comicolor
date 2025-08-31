// pages/admin/registry/edit-color/[hexCode].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../../components/admin/AdminLayout';
import styles from '../../../../styles/Forms.module.css';

const EditColorPage = () => (
    <>
        <Head><title>Edit Color Data</title></Head>
        <div className={styles.formPageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Critical Intervention: #FF5733</h1></header>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}><label className={styles.label}>Color Name</label><input type="text" className={styles.input} defaultValue="Crimson Blaze" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Guardian (Owner)</label><input type="text" className={styles.input} defaultValue="Vectorios" /></div>
                <button type="submit" className={styles.submitButton} style={{backgroundColor: '#e94560'}}>Force Update</button>
            </form>
        </div>
    </>
);
EditColorPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default EditColorPage;