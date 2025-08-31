// pages/admin/events/create.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/Forms.module.css';

const CreateEventPage = () => (
    <>
        <Head><title>Create Official Event</title></Head>
        <div className={styles.formPageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Create Official Event</h1></header>
            <form className={styles.formContainer}>
                <div className={styles.formGroup}><label className={styles.label}>Event Title</label><input type="text" className={styles.input} /></div>
                <div className={styles.formGroup}><label className={styles.label}>Description</label><textarea className={styles.textarea}></textarea></div>
                <button type="submit" className={styles.submitButton}>Announce Event</button>
            </form>
        </div>
    </>
);
CreateEventPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default CreateEventPage;