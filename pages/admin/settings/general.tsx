// pages/admin/settings/general.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/Forms.module.css';

const GeneralSettingsPage = () => (
    <>
        <Head><title>General Settings</title></Head>
        <div className={styles.formPageContainer}>
            <header className={styles.header}><h1 className={styles.title}>System Settings</h1></header>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Maintenance Mode</label>
                    <p>Put the entire Verse into maintenance mode. Only Admins will be able to log in.</p>
                    <button style={{backgroundColor: '#ffc107', color: '#12121e'}}>Enable Maintenance Mode</button>
                </div>
            </form>
        </div>
    </>
);
GeneralSettingsPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default GeneralSettingsPage;