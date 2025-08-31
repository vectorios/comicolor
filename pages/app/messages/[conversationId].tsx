// pages/app/messages/[conversationId].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/app/AppLayout';
import styles from '../../../styles/Messages.module.css';

const mockConversations = [{ id: 'conv01', user: 'NeonDreamer', preview: 'Yes, I\'m interested...' }];

const ConversationPage = () => {
    const router = useRouter();
    const { conversationId } = router.query;
    const conversation = mockConversations.find(c => c.id === conversationId);
    if (!conversation) return null;

    return (
        <>
            <Head><title>Message with {conversation.user}</title></Head>
            <div className={styles.layout}>
                 <aside className={styles.conversationList}>
                     <Link href="/app/messages/conv01" legacyBehavior><a className={styles.conversationItem + ' ' + styles.active}><div className={styles.avatar} /><div><div className={styles.username}>NeonDreamer</div><div className={styles.preview}>Yes, I'm interested...</div></div></a></Link>
                     <Link href="/app/messages/conv02" legacyBehavior><a className={styles.conversationItem}><div className={styles.avatar} /><div><div className={styles.username}>ArtisanVerde</div><div className={styles.preview}>Great work on that...</div></div></a></Link>
                 </aside>
                <main className={styles.chatWindow}>
                    <header className={styles.chatHeader}>{conversation.user}</header>
                    <div className={styles.messageArea}>
                        <div className={`${styles.messageBubble} ${styles.received}`}>Hey! Saw your listing for Crimson Blaze.</div>
                        <div className={`${styles.messageBubble} ${styles.sent}`}>Hi! Yes, it's still available.</div>
                        <div className={`${styles.messageBubble} ${styles.received}`}>Yes, I'm interested in that trade proposal you mentioned.</div>
                    </div>
                    <div className={styles.inputArea}><input type="text" className={styles.messageInput} placeholder="Type a message..." /></div>
                </main>
            </div>
        </>
    );
};
ConversationPage.getLayout = function getLayout(page: ReactElement) { return <AppLayout>{page}</AppLayout>; };
export default ConversationPage;