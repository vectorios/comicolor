// pages/app/factions/diplomacy.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import tableStyles from '../../../styles/RegistryTables.module.css';

const mockRelations = [
    { faction: 'The Monochromes', status: 'Allied' },
    { faction: 'Aether Weavers', status: 'Neutral' },
    { faction: 'Prism Guard', status: 'Rival' },
];

const DiplomacyPage = () => (
    <>
        <Head><title>Faction Diplomacy</title></Head>
        <div className={tableStyles.tablePageContainer}>
            <header className={tableStyles.header}>
                <h1 className={tableStyles.title}>Inter-Faction Diplomacy</h1>
                <p className={tableStyles.subtitle}>Manage your faction's relationships with other major powers in the Verse.</p>
            </header>
            <table className={tableStyles.table}>
                <thead><tr><th>Faction</th><th>Diplomatic Status</th><th>Actions</th></tr></thead>
                <tbody>
                    {mockRelations.map(r => (
                        <tr key={r.faction}>
                            <td>{r.faction}</td>
                            <td><span className={`${tableStyles.status} ${r.status === 'Allied' ? tableStyles.resolved : r.status === 'Rival' ? tableStyles.dismissed : ''}`}>{r.status}</span></td>
                            <td><button>Change Stance</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
DiplomacyPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default DiplomacyPage;