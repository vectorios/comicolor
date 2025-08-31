// pages/app/verse/create-post.tsx

import React, { ReactElement, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../../styles/CreatePost.module.css';
import AppLayout from '../../../components/app/AppLayout';

const CreatePostPage = () => {
  const [postContent, setPostContent] = useState('');
  const router = useRouter();

  const handlePublish = () => {
    // In a real app, this would send the postContent and any attachments to an API
    alert('Post published successfully!');
    router.push('/app/verse'); // Redirect back to the feed after posting
  };

  return (
    <>
      <Head>
        <title>Create Post - The Social Agora</title>
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create a Post</h1>
        </header>

        <div className={styles.editorContainer}>
          <textarea
            className={styles.textarea}
            placeholder="What's on your mind, Guardian?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <div className={styles.toolbar}>
            <div className={styles.attachmentButtons}>
              {/* These would open modals to select colors, creations, etc. */}
              <button className={styles.attachButton} title="Attach Color">🎨</button>
              <button className={styles.attachButton} title="Attach Creation">🖼️</button>
            </div>
            <button
              className={styles.publishButton}
              onClick={handlePublish}
              disabled={postContent.trim().length === 0}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Apply the AppLayout to this page
CreatePostPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default CreatePostPage;