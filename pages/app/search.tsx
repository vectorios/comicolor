// pages/app/search.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../components/app/AppLayout';

const AppSearchPage = () => (
    <>
        <Head><title>Search Results</title></Head>
        <div style={{maxWidth: '900px', margin: '0 auto', padding: '2rem'}}>
            <h1>Search Results for "Crimson"</h1>
            {/* Results would be populated here from different categories */}
            <h2>Colors</h2>
            <p>1 result found: Crimson Blaze (#FF5733)</p>
            <h2>Guardians</h2>
            <p>No results found.</p>
            <h2>Creations</h2>
            <p>No results found.</p>
        </div>
    </>
);
AppSearchPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default AppSearchPage;