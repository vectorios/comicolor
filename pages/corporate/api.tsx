// pages/corporate/api.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';
import CorporateLayout from '../../components/corporate/CorporateLayout';
import formStyles from '../../styles/Forms.module.css';
import docStyles from '../../styles/Docs.module.css';

const ApiPage = () => (
    <>
        <Head><title>API Access</title></Head>
        <header className={formStyles.header} style={{textAlign: 'left'}}>
            <h1 className={formStyles.title}>Developer API Access</h1>
            <p className={formStyles.subtitle}>Manage your API keys and access API documentation.</p>
        </header>
        <div className={formStyles.formContainer}>
            <h2>Your API Keys</h2>
            <p>Your secret keys are listed below. Do not share them publicly.</p>
            <div className={docStyles.codeBlock}>
                prod_sk_********************abcd
            </div>
            <button>Generate New Key</button>
        </div>
    </>
);
ApiPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default ApiPage;