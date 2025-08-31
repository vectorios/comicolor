// pages/corporate/benefits.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import CorporateLayout from '../../components/corporate/CorporateLayout';
import styles from '../../styles/RegistryTables.module.css';

const mockBenefits = [
    { id: 'b01', name: '10% Off All Stark Industries Products', type: 'Discount', status: 'Active' },
    { id: 'b02', name: 'Early Access to New Collections', type: 'Perk', status: 'Active' },
];

const BenefitsPage = () => (
    <>
        <Head><title>Manage Guardian Benefits</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}>
                <h1 className={styles.title}>Guardian Benefits</h1>
                <p className={styles.subtitle}>Manage the perks and discounts your brand offers to the citizens of ColorVerse.</p>
            </header>
            <table className={styles.table}>
                <thead><tr><th>Benefit</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                    {mockBenefits.map(b => (
                        <tr key={b.id}>
                            <td>{b.name}</td><td>{b.type}</td>
                            <td><span className={`${styles.status} ${styles.resolved}`}>{b.status}</span></td>
                            <td><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
BenefitsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default BenefitsPage;