// pages/corporate/billing.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import CorporateLayout from '../../components/corporate/CorporateLayout';
import styles from '../../styles/RegistryTables.module.css';

const mockInvoices = [
    { id: 'INV-003', date: '2025-08-01', total: 5000, status: 'Paid' },
    { id: 'INV-002', date: '2025-07-01', total: 2500, status: 'Paid' },
];

const BillingPage = () => (
     <>
        <Head><title>Corporate Billing</title></Head>
        <div className={styles.tablePageContainer}>
             <header className={styles.header}><h1 className={styles.title}>Billing & Invoices</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Invoice ID</th><th>Date</th><th>Total (USD)</th><th>Status</th></tr></thead>
                <tbody>
                    {mockInvoices.map(inv => (
                        <tr key={inv.id}>
                            <td>{inv.id}</td><td>{inv.date}</td><td>${inv.total.toLocaleString()}</td>
                             <td><span className={`${styles.status} ${styles.resolved}`}>{inv.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
BillingPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default BillingPage;