// pages/admin/economy/edit-transaction/[txId].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/admin/AdminLayout';
import styles from '../../../../styles/Forms.module.css';
import cardStyles from '../../../../styles/Dashboard.module.css';

const EditTransactionPage = () => {
    const router = useRouter();
    const { txId } = router.query;

    const mockTx = {
        id: txId,
        from: 'Market',
        to: 'Vectorios',
        amount: 150,
        asset: 'Crimson Blaze (#FF5733)',
        timestamp: '2025-08-30 10:00:00 UTC'
    };

    return (
        <>
            <Head><title>Edit Transaction: {txId}</title></Head>
            <div className={styles.formPageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Transaction Intervention</h1>
                    <p className={styles.subtitle}>Critical administrative action on transaction <span style={{fontFamily: 'monospace'}}>{txId}</span></p>
                </header>

                <div className={cardStyles.grid} style={{marginBottom: '2rem'}}>
                     <div className={cardStyles.card}>
                        <h2 className={cardStyles.cardTitle}>Details</h2>
                        <p>From: {mockTx.from}</p>
                        <p>To: {mockTx.to}</p>
                        <p>Amount: {mockTx.amount} PRISMS</p>
                        <p>Asset: {mockTx.asset}</p>
                    </div>
                </div>

                <form className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="action" className={styles.label}>Action</label>
                        <select id="action" className={styles.input}>
                            <option>Reverse Transaction</option>
                            <option>Correct Amount</option>
                        </select>
                    </div>
                     <div className={styles.formGroup}>
                        <label htmlFor="reason" className={styles.label}>Reason for Intervention (Logged)</label>
                        <input type="text" id="reason" className={styles.input} placeholder="e.g., System error during auction settlement" required/>
                    </div>
                    <button type="submit" className={styles.submitButton} style={{backgroundColor: '#e94560'}}>
                        Execute Intervention
                    </button>
                </form>
            </div>
        </>
    );
};

EditTransactionPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};

export default EditTransactionPage;