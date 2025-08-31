// pages/app/events/archives.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Events.module.css'; // Reuse styles
import AppLayout from '../../../components/app/AppLayout';

const mockPastEvents = [
  { id: 'evt-past-01', title: 'The Inaugural Genesis', date: { month: 'JAN', day: '01' }, type: 'Historic' },
  { id: 'evt-past-02', title: 'Summer Palette Contest', date: { month: 'JUL', day: '20' }, type: 'Competition' },
];

const ArchivesPage = () => (
    <>
        <Head><title>Event Archives - The Colosseum</title></Head>
        <div className={styles.pageContainer}>
            <header className={styles.header}><h1 className={styles.title}>The Colosseum</h1></header>
            <nav className={styles.subNavBar}>
                <Link href="/app/events" legacyBehavior><a className={styles.navLink}>Calendar</a></Link>
                <Link href="/app/events/archives" legacyBehavior><a className={`${styles.navLink} ${styles.active}`}>Archives</a></Link>
            </nav>
            <div className={styles.eventList}>
                {mockPastEvents.map((event) => (
                    <div key={event.id} className={styles.eventItem} style={{opacity: 0.7}}>
                        <div className={styles.dateBox}><span className={styles.month}>{event.date.month}</span><span className={styles.day}>{event.date.day}</span></div>
                        <div className={styles.details}><span className={styles.eventType}>{event.type}</span><h3 className={styles.eventTitle}>{event.title}</h3></div>
                    </div>
                ))}
            </div>
        </div>
    </>
);
ArchivesPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default ArchivesPage;