// pages/account/orders.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import AccountLayout from '../../components/account/AccountLayout';
import styles from '../../styles/RegistryTables.module.css';

const mockOrders = [
    { id: 'ORD-01', date: '2025-08-15', item: 'Ceramic Mug (Crimson Blaze)', status: 'Shipped' },
    { id: 'ORD-02', date: '2025-08-20', item: 'A3 Poster (Royal Amethyst)', status: 'Processing' },
];

const OrdersPage = () => (
    <>
        <Head><title>My Materializations</title></Head>
        <table className={styles.table}>
            <thead><tr><th>Order ID</th><th>Date</th><th>Item</th><th>Status</th></tr></thead>
            <tbody>
                {mockOrders.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td><td>{order.date}</td><td>{order.item}</td>
                        <td><span className={`${styles.status} ${order.status === 'Shipped' ? styles.resolved : styles.indeliberation}`}>{order.status}</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);
OrdersPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default OrdersPage;