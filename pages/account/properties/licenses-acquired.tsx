// pages/account/properties/licenses-acquired.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockAcquiredLicenses = [
    { id: 'LIC-A1', color: 'Cobalt Blue (#0047AB)', licensor: 'Stark Industries', status: 'Active', expiry: 'N/A (Brandlock)' },
];

const LicensesAcquiredPage = () => (
    <>
        <Head><title>Licenses Acquired</title></Head>
        <header className={styles.header}>
            <h1 className={styles.title}>Licenses Acquired</h1>
            <p className={styles.subtitle}>A record of all licenses you have acquired to use other Guardians' or brands' colors.</p>
        </header>
        <table className={styles.table}>
            <thead><tr><th>License ID</th><th>Asset</th><th>Licensor</th><th>Status</th><th>Expires</th></tr></thead>
            <tbody>
                {mockAcquiredLicenses.map(lic => (
                    <tr key={lic.id}>
                        <td>{lic.id}</td><td>{lic.color}</td><td>{lic.licensor}</td>
                        <td><span className={`${styles.status} ${styles.resolved}`}>{lic.status}</span></td>
                        <td>{lic.expiry}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);
LicensesAcquiredPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default LicensesAcquiredPage;