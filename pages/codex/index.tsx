// pages/codex/index.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Codex.module.css';

// Mock data representing the Books of the Codex.
// In a real app, this would come from a CMS or database.
const codexData = [
  {
    id: 'I',
    title: 'Book I: The Public & Constitutional Portal',
    description: 'Defines the public facade of the Nation, its core principles, and the initial engagement process for all prospective citizens.',
    firstArticle: {
      title: 'Article 1.1: The Grand Plaza Manifesto',
      text: 'The ColorVerse shall present a public-facing portal serving as the grand plaza of the nation-state, articulating its core mission, constitutional pillars...'
    }
  },
  {
    id: 'II',
    title: 'Book II: The Citizen\'s Domain',
    description: 'Governs the rights, tools, and environments available to ratified Guardians within the core application.',
    firstArticle: {
      title: 'Article 2.1: The Guardian\'s Desk',
      text: 'Upon ratification, each Guardian is granted access to a personal command center, known as the Guardian\'s Desk, from which all civic and creative duties...'
    }
  },
  {
    id: 'III',
    title: 'Book III: The Legal & Judicial Citadel',
    description: 'Establishes the complete framework for governance, dispute resolution, and legislative evolution of the Codex.',
    firstArticle: {
      title: 'Article 3.1: The Chromatic High Court',
      text: 'A High Court is hereby established as the supreme judicial body of the Verse, responsible for interpreting the Codex and adjudicating high-level disputes...'
    }
  },
  // Add more books as needed...
];

const CodexPage = () => {
  // State to track which book is currently being viewed
  const [activeBook, setActiveBook] = useState(codexData[0]);

  return (
    <>
      <Head>
        <title>The Chromatic Codex - ColorVerse</title>
        <meta name="description" content="The founding library and complete legal corpus of the ColorVerse nation-state." />
      </Head>
      <div className={styles.codexLayout}>
        <nav className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>The Books of Law</h2>
          <ul className={styles.bookList}>
            {codexData.map((book) => (
              <li key={book.id} className={styles.bookItem}>
                <button
                  onClick={() => setActiveBook(book)}
                  className={activeBook.id === book.id ? styles.active : ''}
                >
                  {book.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <article className={styles.contentArea}>
          <h1 className={styles.bookTitle}>{activeBook.title}</h1>
          <blockquote className={styles.bookDescription}>
            {activeBook.description}
          </blockquote>

          <div className={styles.articlePreview}>
            <h3 className={styles.articleTitle}>{activeBook.firstArticle.title}</h3>
            <p className={styles.articleText}>{activeBook.firstArticle.text}</p>
          </div>

          <Link href={`/codex/book/${activeBook.id}`} legacyBehavior>
            <a className={styles.readMoreLink}>Read Full Book →</a>
          </Link>
        </article>
      </div>
    </>
  );
};

export default CodexPage;