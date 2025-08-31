// pages/admin/economy/market-supervision.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import styles from '../../../styles/RegistryTables.module.css';

const mockListings = [ { id: 'l001', item: 'Crimson Blaze', type: 'Sale', price: 150, seller: 'Vectorios', status: 'Active' } ];

const MarketSupervisionPage = () => (
    <>
        <Head><title>Market Supervision</title></Head>
        <div className={styles.tablePageContainer}>
            <header className={styles.header}><h1 className={styles.title}>Market Supervision</h1></header>
            <table className={styles.table}>
                <thead><tr><th>Listing ID</th><th>Item</th><th>Type</th><th>Price</th><th>Seller</th><th>Status</th></tr></thead>
                <tbody>
                    {mockListings.map(l => (
                        <tr key={l.id}>
                            <td>{l.id}</td><td>{l.item}</td><td>{l.type}</td><td>{l.price}</td><td>{l.seller}</td>
                            <td><span className={`${styles.status} ${styles.resolved}`}>{l.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
MarketSupervisionPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default MarketSupervisionPage;