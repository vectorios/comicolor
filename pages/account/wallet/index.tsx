// pages/account/wallet/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import cardStyles from '../../../styles/Dashboard.module.css';

const WalletPage = () => (
     <>
        <Head><title>Wallet Balances</title></Head>
         <div className={cardStyles.grid}>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>PRISMS Balance</h2>
                <span className={cardStyles.statValue}>1,250</span>
                <span className={cardStyles.statLabel}> PRISMS</span>
            </div>
             <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Quick Actions</h2>
                <div className={cardStyles.quickActionsList}>
                    <button className={cardStyles.actionButton}>Buy PRISMS</button>
                    <button className={cardStyles.actionButton}>Withdraw Funds</button>
                </div>
            </div>
        </div>
    </>
);
WalletPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default WalletPage;