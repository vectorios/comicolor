// pages/codex/book/[id].tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { codexData } from '../../../lib/mockCodex'; // Import our data
import styles from '../../../styles/CodexBook.module.css';

const BookPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the book ID from the URL

  // Find the book data that matches the ID from the URL
  const book = codexData.find(b => b.id === id);

  if (!book) {
    // If the book isn't found or the page is loading, show a simple message
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Book not found.</h1>
          <Link href="/codex" legacyBehavior><a className={styles.backLink}>← Return to the Codex</a></Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{book.title} - The Chromatic Codex</title>
        <meta name="description" content={book.description} />
      </Head>
      <div className={styles.container}>
        <Link href="/codex" legacyBehavior><a className={styles.backLink}>← Back to Codex Overview</a></Link>
        <header className={styles.header}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <p className={styles.bookDescription}>{book.description}</p>
        </header>

        <section>
          <h2>Table of Contents</h2>
          <ol className={styles.chaptersList}>
            {book.chapters.map((chapter) => (
              <li key={chapter.id} className={styles.chapterItem}>
                <Link href={`/codex/chapter/${chapter.id}`} legacyBehavior>
                  <a className={styles.chapterLink}>
                    <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                    <p className={styles.chapterSummary}>{chapter.summary}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
};

export default BookPage;