// pages/app/factions/rankings.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import tableStyles from '../../../styles/RegistryTables.module.css'; // Reuse styles

const mockRankings = [
    { rank: 1, name: 'The Prism Guard', members: 210, treasury: 85000 },
    { rank: 2, name: 'The Chromatic Order', members: 125, treasury: 52000 },
    { rank: 3, name: 'The Monochromes', members: 78, treasury: 31000 },
];

const FactionRankingsPage = () => (
    <>
        <Head><title>Faction Rankings</title></Head>
        <div className={tableStyles.tablePageContainer}>
            <header className={tableStyles.header}>
                <h1 className={tableStyles.title}>Faction Rankings</h1>
                <p className={tableStyles.subtitle}>Rankings are calculated based on a combination of member count, treasury size, and event participation.</p>
            </header>
            <table className={tableStyles.table}>
                <thead><tr><th>Rank</th><th>Faction</th><th>Members</th><th>Treasury (PRISMS)</th></tr></thead>
                <tbody>
                    {mockRankings.map(f => (
                        <tr key={f.rank}>
                            <td style={{fontSize: '1.5rem', fontWeight:'bold'}}>{f.rank}</td>
                            <td>{f.name}</td>
                            <td>{f.members}</td>
                            <td>{f.treasury.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
FactionRankingsPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default FactionRankingsPage;