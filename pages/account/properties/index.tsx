// pages/account/properties/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import gridStyles from '../../../styles/Registry.module.css';

const myColors = [
    { hex: '#FF5733', name: 'Crimson Blaze' },
    { hex: '#8E44AD', name: 'Royal Amethyst' },
    { hex: '#D35400', name: 'Pumpkin Spice' },
];

const PropertiesPage = () => (
    <>
        <Head><title>My Sovereign Colors</title></Head>
        <div className={gridStyles.colorGrid}>
          {myColors.map((color) => (
            <Link key={color.hex} href={`/app/color/${color.hex.substring(1)}`} legacyBehavior>
              <a className={gridStyles.colorCard}>
                <div className={gridStyles.swatch} style={{ backgroundColor: color.hex }} />
                <div className={gridStyles.info}>
                  <div className={gridStyles.hexCode}>{color.hex}</div>
                  <div className={gridStyles.owner}>{color.name}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
    </>
);
PropertiesPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default PropertiesPage;