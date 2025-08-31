// pages/account/profile.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout'; // We will create this
import styles from '../../styles/Forms.module.css';

const ProfilePage = () => (
    <>
        <Head><title>Edit Profile</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Edit Public Identity</h1>
            <p className={styles.subtitle}>This information will be displayed on your public profile.</p>
        </header>
        <form className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="bio" className={styles.label}>Biography</label>
                <textarea id="bio" className={styles.textarea} placeholder="Tell the Verse about yourself..."></textarea>
            </div>
             <div className={styles.formGroup}>
                <label htmlFor="avatar" className={styles.label}>Avatar Image</label>
                <input type="file" id="avatar" className={styles.input} />
            </div>
            <button type="submit" className={styles.submitButton}>Save Changes</button>
        </form>
    </>
);
// This is the new pattern for nested layouts
ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default ProfilePage;