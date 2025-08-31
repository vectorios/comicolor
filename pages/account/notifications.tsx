// pages/account/notifications.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import styles from '../../styles/Forms.module.css';

const NotificationsPage = () => (
    <>
        <Head><title>Notification Settings</title></Head>
        <form className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Market Alerts</label>
                <p>Notify me when an item on my watchlist is listed.</p>
                {/* A real app would use checkboxes */}
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Social Notifications</label>
                <p>Notify me when someone replies to my post.</p>
            </div>
            <button type="submit" className={styles.submitButton}>Save Settings</button>
        </form>
    </>
);
NotificationsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default NotificationsPage;