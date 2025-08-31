// pages/admin/justice/case/[caseId].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/admin/AdminLayout';
import styles from '../../../../styles/AdminCase.module.css';

const CaseDetailPage = () => {
    const router = useRouter();
    const { caseId } = router.query;
    return (
        <>
            <Head><title>Case Details: {caseId}</title></Head>
            <div className={styles.layout}>
                <main className={styles.main}>
                    <div className={styles.header}><p className={styles.caseId}>Case {caseId}</p><h1 className={styles.title}>Alleged Violation of Faction Treaty</h1></div>
                    <p>Evidence and deliberations go here...</p>
                </main>
                <aside className={styles.sidebar}>
                    <h3>Case Details</h3>
                    <p>Status: In Deliberation</p>
                    <h3>Actions</h3>
                    <div className={styles.actions}>
                        <button style={{backgroundColor: '#28a745', color: '#fff'}}>Rule in Favor of Plaintiff</button>
                        <button style={{backgroundColor: '#dc3545', color: '#fff'}}>Rule in Favor of Defendant</button>
                        <button>Dismiss Case</button>
                    </div>
                </aside>
            </div>
        </>
    );
};
CaseDetailPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default CaseDetailPage;