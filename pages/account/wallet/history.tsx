// pages/account/wallet/history.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockHistory = [
    { id: 'tx01', date: '2025-08-30', type: 'Sale', amount: '+150', desc: 'Sale of Crimson Blaze' },
    { id: 'tx02', date: '2025-08-28', type: 'Purchase', amount: '-220', desc: 'Purchase of Sunstone' },
    { id: 'tx03', date: '2025-08-25', type: 'Fee', amount: '-10', desc: 'Faction Dues: Chromatic Order' },
];

const HistoryPage = () => (
    <>
        <Head><title>Transaction History</title></Head>
        <table className={styles.table}>
            <thead><tr><th>Date</th><th>Type</th><th>Amount (PRISMS)</th><th>Description</th></tr></thead>
            <tbody>
                {mockHistory.map(tx => (
                    <tr key={tx.id}>
                        <td>{tx.date}</td>
                        <td>{tx.type}</td>
                        <td style={{color: tx.amount.startsWith('+') ? '#33FF57' : '#E74C3C'}}>{tx.amount}</td>
                        <td>{tx.desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);
HistoryPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default HistoryPage;