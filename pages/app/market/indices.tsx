// pages/app/market/indices.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import cardStyles from '../../../styles/Dashboard.module.css';

const MarketIndicesPage = () => (
    <>
        <Head><title>Market Indices - ColorVerse</title></Head>
        <h1 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Market Financial Analysis</h1>
        <div className={cardStyles.grid}>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Total Market Cap</h2>
                <span className={cardStyles.statValue}>8,450,210 <span style={{fontSize:'1rem'}}>PRISMS</span></span>
            </div>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>24h Volume</h2>
                <span className={cardStyles.statValue}>+152,730</span>
            </div>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Most Traded Color (24h)</h2>
                <span className={cardStyles.statValue}>#FFC0CB <span style={{fontSize:'1rem'}}>Pink</span></span>
            </div>
            <div className={cardStyles.card}>
                <h2 className={cardStyles.cardTitle}>Sovereignty Index</h2>
                <p>An index tracking the value of the top 100 most valuable colors.</p>
                <span className={cardStyles.statValue}>1,245.7 <span style={{fontSize:'1.2rem', color: '#33FF57'}}>+2.1%</span></span>
            </div>
        </div>
        {/* A real version would have charts and graphs here */}
    </>
);
MarketIndicesPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default MarketIndicesPage;