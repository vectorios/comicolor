// pages/admin/economy/transactions.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockTx = [ { id: 'tx01', type: 'Sale', amount: '+150', from: 'Market', to: 'Vectorios' } ];

const TransactionsPage = () => (
    <>
        <Head><title>All Transactions</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Full Transaction Log</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Tx ID</th><th>Type</th><th>From</th><th>To</th><th>Amount</th></tr></thead>
                <tbody>
                    {mockTx.map(tx => <tr key={tx.id}><td>{tx.id}</td><td>{tx.type}</td><td>{tx.from}</td><td>{tx.to}</td><td>{tx.amount}</td></tr>)}
                </tbody>
            </table>
        </div>
    </>
);
TransactionsPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default TransactionsPage;