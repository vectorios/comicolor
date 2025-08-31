// pages/app/events/[eventId].tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/EventDetail.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for events, fetched based on eventId
const mockEvents = [
  { 
    id: 'evt01', 
    title: 'The Spectrum Sprint', 
    dateString: 'September 15, 2025',
    type: 'Competition',
    description: 'A fast-paced competition where Guardians are challenged to create a 5-color palette based on a surprise theme revealed at the start of the event. Submissions are judged on speed, harmony, and originality.',
    rules: '1. Palettes must be created and submitted within the 1-hour time limit. 2. All colors used must be from the Guardian\'s own collection. 3. The theme is non-negotiable.',
    prizes: '1st Place: 10,000 PRISMS and the "Spectrum Master" title. 2nd Place: 5,000 PRISMS. 3rd Place: 2,500 PRISMS.',
    participants: ['Vectorios', 'NeonDreamer', 'PixelPerfect']
  },
];

const EventDetailPage = () => {
    const router = useRouter();
    const { eventId } = router.query;
    
    const event = mockEvents.find(e => e.id === eventId);

    if (!event) {
        return <div>Loading or Event not found...</div>;
    }

    return (
        <>
            <Head>
                <title>{event.title} - ColorVerse Events</title>
            </Head>
            <div className={styles.pageContainer}>
                <header className={styles.header}>
                    <span className={styles.eventType}>{event.type}</span>
                    <h1 className={styles.title}>{event.title}</h1>
                    <p className={styles.date}>{event.dateString}</p>
                </header>

                <div className={styles.mainLayout}>
                    <main>
                        <section className={styles.detailsSection}>
                            <h2>Description</h2>
                            <p>{event.description}</p>
                        </section>
                        <section className={styles.detailsSection}>
                            <h2>Rules</h2>
                            <p>{event.rules}</p>
                        </section>
                        <section className={styles.detailsSection}>
                            <h2>Prizes</h2>
                            <p>{event.prizes}</p>
                        </section>
                    </main>
                    <aside className={styles.sidebar}>
                        <button className={styles.registerButton}>Register for Event</button>
                        <h2>Participants ({event.participants.length})</h2>
                        <ul className={styles.participantList}>
                            {event.participants.map(name => (
                                <li key={name}>
                                    <Link href={`/app/users/${name}`} legacyBehavior>
                                        <a className={styles.participantItem}>
                                            <div className={styles.avatar} />
                                            <div className={styles.username}>{name}</div>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    );
};

// Apply the AppLayout to this page
EventDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default EventDetailPage;