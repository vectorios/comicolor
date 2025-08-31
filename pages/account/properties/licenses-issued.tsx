// pages/account/properties/licenses-issued.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockIssuedLicenses = [
    { id: 'LIC-01', color: 'Crimson Blaze (#FF5733)', licensee: 'BrandCorp', status: 'Active', expiry: '2026-01-01' },
    { id: 'LIC-02', color: 'Royal Amethyst (#8E44AD)', licensee: 'ArtisanVerde', status: 'Expired', expiry: '2025-06-01' },
];

const LicensesIssuedPage = () => (
    <>
        <Head><title>Licenses Issued</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Licenses Issued</h1>
            <p className={styles.subtitle}>A record of all commercial-use licenses you have granted for your Sovereign Colors.</p>
        </header>
        <table className={styles.table}>
            <thead><tr><th>License ID</th><th>Asset</th><th>Licensee</th><th>Status</th><th>Expires</th></tr></thead>
            <tbody>
                {mockIssuedLicenses.map(lic => (
                    <tr key={lic.id}>
                        <td>{lic.id}</td><td>{lic.color}</td><td>{lic.licensee}</td>
                        <td><span className={`${styles.status} ${lic.status === 'Active' ? styles.resolved : styles.dismissed}`}>{lic.status}</span></td>
                        <td>{lic.expiry}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);
LicensesIssuedPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default LicensesIssuedPage;