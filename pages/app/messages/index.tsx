// pages/app/messages/index.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../../../components/app/AppLayout';
import styles from '../../../styles/Messages.module.css';

const mockConversations = [
    { id: 'conv01', user: 'NeonDreamer', preview: 'Yes, I\'m interested in that trade...' },
    { id: 'conv02', user: 'ArtisanVerde', preview: 'Great work on that last palette!' },
];

const MessagesIndexPage = () => (
    <>
        <Head><title>Messages</title></Head>
        <div className={styles.layout}>
            <aside className={styles.conversationList}>
                {mockConversations.map(c => (
                    <Link key={c.id} href={`/app/messages/${c.id}`} legacyBehavior>
                        <a className={styles.conversationItem}>
                            <div className={styles.avatar} />
                            <div><div className={styles.username}>{c.user}</div><div className={styles.preview}>{c.preview}</div></div>
                        </a>
                    </Link>
                ))}
            </aside>
            <main className={styles.chatWindow}>
                <div style={{margin: 'auto', textAlign: 'center', color: '#a0a0b0'}}>Select a conversation to start messaging.</div>
            </main>
        </div>
    </>
);
MessagesIndexPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default MessagesIndexPage;