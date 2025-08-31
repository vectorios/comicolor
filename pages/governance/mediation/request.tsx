// pages/governance/mediation/request.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Forms.module.css';
import AppLayout from '../../../components/app/AppLayout';

const RequestMediationPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mediation request submitted. Dossier #M-2025-042 has been opened.');
    };

    return (
        <>
            <Head><title>Request Mediation - Arbitration Tribunal</title></Head>
            <div className={styles.formPageContainer}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Request Mediation</h1>
                    <p className={styles.subtitle}>
                        For disputes that do not require a formal High Court hearing. A neutral mediator will be assigned to help resolve the issue amicably.
                    </p>
                </header>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="otherParty" className={styles.label}>Other Party (Guardian Name)</label>
                        <input type="text" id="otherParty" className={styles.input} placeholder="Enter the username of the other Guardian involved" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="issue" className={styles.label}>Nature of the Dispute</label>
                        <input type="text" id="issue" className={styles.input} placeholder="e.g., 'Disagreement over a trade agreement'" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="summary" className={styles.label}>Summary of the Issue</label>
                        <textarea id="summary" className={styles.textarea} placeholder="Please provide a neutral summary of the situation and the desired outcome." required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit Mediation Request</button>
                </form>
            </div>
        </>
    );
};
RequestMediationPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default RequestMediationPage;