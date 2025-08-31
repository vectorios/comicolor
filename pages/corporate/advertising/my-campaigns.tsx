// pages/corporate/advertising/my-campaigns.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import CorporateLayout from '../../../components/corporate/CorporateLayout';
import tableStyles from '../../../styles/RegistryTables.module.css';

const mockCampaigns = [
    { id: 'CAMP-01', name: 'Fall Collection Launch', status: 'Active', budget: 5000 },
    { id: 'CAMP-02', name: 'Summer Sale', status: 'Completed', budget: 2500 },
];

const MyCampaignsPage = () => (
    <>
        <Head><title>My Advertising Campaigns</title></Head>
        <div className={tableStyles.tablePageContainer}>
            <header className={tableStyles.header}>
                <h1 className={tableStyles.title}>Advertising Campaigns</h1>
            </header>
            <table className={tableStyles.table}>
                <thead><tr><th>Campaign ID</th><th>Name</th><th>Status</th><th>Budget (PRISMS)</th></tr></thead>
                <tbody>
                    {mockCampaigns.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td><span className={`${tableStyles.status} ${c.status === 'Active' ? tableStyles.voting : tableStyles.resolved}`}>{c.status}</span></td>
                            <td>{c.budget.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
MyCampaignsPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout><CorporateLayout>{page}</CorporateLayout></AppLayout>;
};
export default MyCampaignsPage;