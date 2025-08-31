// pages/app/factions/create.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '../../../components/app/AppLayout';
import formStyles from '../../../styles/Forms.module.css';

const CreateFactionPage = () => (
    <>
        <Head><title>Create a Faction</title></Head>
        <div className={formStyles.formPageContainer}>
            <header className={formStyles.header}>
                <h1 className={formStyles.title}>Found a New Faction</h1>
                <p className={formStyles.subtitle}>Unite Guardians under your banner. A Faction requires a unique name, an emblem color, and a clear manifesto.</p>
            </header>
            <form className={formStyles.formContainer}>
                <div className={formStyles.formGroup}>
                    <label htmlFor="name" className={formStyles.label}>Faction Name</label>
                    <input type="text" id="name" className={formStyles.input} />
                </div>
                 <div className={formStyles.formGroup}>
                    <label htmlFor="motto" className={formStyles.label}>Faction Motto</label>
                    <input type="text" id="motto" className={formStyles.input} />
                </div>
                 <div className={formStyles.formGroup}>
                    <label htmlFor="manifesto" className={formStyles.label}>Manifesto</label>
                    <textarea id="manifesto" className={formStyles.textarea}></textarea>
                </div>
                <button type="submit" className={formStyles.submitButton}>Found Faction (Cost: 1,000 PRISMS)</button>
            </form>
        </div>
    </>
);
CreateFactionPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default CreateFactionPage;