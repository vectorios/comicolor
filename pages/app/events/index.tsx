// pages/app/events/index.tsx

import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Events.module.css';
import AppLayout from '../../../components/app/AppLayout';

// Mock data for upcoming events
const mockEvents = [
  { 
    id: 'evt01', 
    title: 'The Spectrum Sprint', 
    date: { month: 'SEP', day: '15' },
    type: 'Competition',
    summary: 'A timed palette creation challenge. The fastest and most harmonious palette wins a grand prize.'
  },
  { 
    id: 'evt02', 
    title: 'Monochrome Gala', 
    date: { month: 'SEP', day: '28' },
    type: 'Social',
    summary: 'A formal gathering hosted by The Monochromes faction to celebrate the art of simplicity.'
  },
  { 
    id: 'evt03', 
    title: 'Genesis Rush', 
    date: { month: 'OCT', day: '01' },
    type: 'Community',
    summary: 'A new range of colors will be released into the Public Domain. Be the first to claim them!'
  },
];

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>Events Calendar - The Colosseum</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>The Colosseum</h1>
        </header>

        <nav className={styles.subNavBar}>
          <Link href="/app/events" legacyBehavior><a className={`${styles.navLink} ${styles.active}`}>Calendar</a></Link>
          <Link href="/app/events/archives" legacyBehavior><a className={styles.navLink}>Archives</a></Link>
        </nav>

        <div className={styles.eventList}>
          {mockEvents.map((event) => (
            <Link key={event.id} href={`/app/events/${event.id}`} legacyBehavior>
              <a className={styles.eventItem}>
                <div className={styles.dateBox}>
                  <span className={styles.month}>{event.date.month}</span>
                  <span className={styles.day}>{event.date.day}</span>
                </div>
                <div className={styles.details}>
                  <span className={styles.eventType}>{event.type}</span>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventSummary}>{event.summary}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
EventsPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default EventsPage;
