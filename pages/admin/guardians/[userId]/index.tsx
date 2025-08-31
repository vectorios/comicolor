// pages/admin/guardians/[userId]/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/admin/AdminLayout';
import styles from '../../../../styles/Forms.module.css';

const GuardianDetailPage = () => {
    const router = useRouter();
    const { userId } = router.query;
    return (
        <>
            <Head><title>Guardian Details: {userId}</title></Head>
            <div className={styles.header} style={{textAlign:'left'}}>
                <h1 className={styles.title}>Guardian: Vectorios (ID: {userId})</h1>
                <p>Email: vec@verse.io | Status: Active</p>
            </div>
            {/* Detailed stats and logs would go here */}
        </>
    );
};
GuardianDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default GuardianDetailPage;