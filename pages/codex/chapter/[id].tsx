// pages/codex/chapter/[id].tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { codexData, Book, Chapter } from '../../../lib/mockCodex';
import styles from '../../../styles/CodexChapter.module.css';

const ChapterPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the chapter and its parent book from our mock data
  let chapter: Chapter | null = null;
  let parentBook: Book | null = null;

  if (id) {
    for (const book of codexData) {
      const foundChapter = book.chapters.find(ch => ch.id === id);
      if (foundChapter) {
        chapter = foundChapter;
        parentBook = book;
        break;
      }
    }
  }

  if (!chapter || !parentBook) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Chapter Not Found</h1>
          <Link href="/codex" legacyBehavior><a className={styles.breadcrumb}>← Return to the Codex</a></Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{chapter.title} - ColorVerse Codex</title>
        <meta name="description" content={chapter.summary} />
      </Head>
      <div className={styles.container}>
        <Link href={`/codex/book/${parentBook.id}`} legacyBehavior>
            <a className={styles.breadcrumb}>← Back to {parentBook.title}</a>
        </Link>
        <header className={styles.header}>
          <h1 className={styles.chapterTitle}>{chapter.title}</h1>
        </header>

        <article className={styles.content}>
          {/* We split the content by newline characters to create paragraphs */}
          {chapter.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </>
  );
};

export default ChapterPage;