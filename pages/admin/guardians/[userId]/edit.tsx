// pages/admin/guardians/[userId]/edit.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../../components/admin/AdminLayout';
import styles from '../../../../styles/Forms.module.css';

const EditGuardianPage = () => (
    <>
        <Head><title>Edit Guardian</title></Head>
        <div className={styles.formPageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Edit Guardian: Vectorios</h1></header>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}><label className={styles.label}>Email</label><input type="email" className={styles.input} defaultValue="vec@verse.io" /></div>
                <div className={styles.formGroup}><label className={styles.label}>Role</label><select className={styles.input}><option>Guardian</option><option>Moderator</option><option>Admin</option></select></div>
                <button type="submit" className={styles.submitButton}>Save Changes</button>
            </form>
        </div>
    </>
);
EditGuardianPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default EditGuardianPage;