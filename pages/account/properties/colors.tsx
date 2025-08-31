// pages/account/properties/colors.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../../components/app/AppLayout';
import AccountLayout from '../../../components/account/AccountLayout';
import gridStyles from '../../../styles/Registry.module.css';
import formStyles from '../../../styles/Forms.module.css';

const myColors = [
    { hex: '#FF5733', name: 'Crimson Blaze', forSale: true },
    { hex: '#8E44AD', name: 'Royal Amethyst', forSale: false },
    { hex: '#D35400', name: 'Pumpkin Spice', forSale: false },
    { hex: '#1ABC9C', name: 'Turquoise Sea', forSale: true },
];

const ColorsPage = () => (
    <>
        <Head><title>My Sovereign Colors</title></Head>
        <header className={formStyles.header} style={{textAlign: 'left', marginBottom: '2rem'}}>
            <h1 className={formStyles.title}>My Private Registry</h1>
            <p className={formStyles.subtitle}>Manage your collection of Sovereign Colors. List them for sale, edit their names, or grant licenses.</p>
        </header>
        <div className={gridStyles.colorGrid}>
          {myColors.map((color) => (
            <div key={color.hex} className={gridStyles.colorCard} style={{border: color.forSale ? '2px solid #33FF57' : '1px solid rgba(255, 255, 255, 0.1)'}}>
                <Link href={`/app/color/${color.hex.substring(1)}`} legacyBehavior>
                    <a>
                        <div className={gridStyles.swatch} style={{ backgroundColor: color.hex }} />
                        <div className={gridStyles.info}>
                        <div className={gridStyles.hexCode}>{color.hex}</div>
                        <div className={gridStyles.owner}>{color.name}</div>
                        {color.forSale && <div style={{color: '#33FF57', fontWeight: 'bold', marginTop: '0.5rem'}}>On Sale</div>}
                        </div>
                    </a>
                </Link>
            </div>
          ))}
        </div>
    </>
);

ColorsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><AccountLayout>{page}</AccountLayout></AppLayout>;
};
export default ColorsPage;