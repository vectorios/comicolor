// pages/corporate/business-registry/directory.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import CorporateLayout from '../../../components/corporate/CorporateLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockBusinesses = [
    { id: 'b-01', name: 'Stark Industries', type: 'Technology' },
    { id: 'b-02', name: 'ArtisanVerde Prints', type: 'Printing Service' },
];

const BusinessDirectoryPage = () => (
    <>
        <Head><title>Business Directory</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Verse Business Directory</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Business Name</th><th>Industry</th></tr></thead>
                <tbody>
                    {mockBusinesses.map(b => (
                        <tr key={b.id}>
                            <td>{b.name}</td><td>{b.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
BusinessDirectoryPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default BusinessDirectoryPage;