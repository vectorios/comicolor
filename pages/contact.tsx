// pages/contact.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Contact.module.css';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <>
      <Head>
        <title>Contact Us - ColorVerse Help & Contact Bureau</title>
        <meta name="description" content="Get in touch with the ColorVerse support team." />
      </Head>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Help & Contact Bureau</h1>
          <p className={styles.subtitle}>
            Have a question, suggestion, or need assistance? We're here to help.
          </p>
        </header>
        
        <div className={styles.contactLayout}>
          <div className={styles.contactInfo}>
            <h3>Before you write...</h3>
            <p>
              Many common questions are answered in our comprehensive Knowledge Base.
              You might find your answer there instantly!
            </p>
            <p>
                <Link href="/support/knowledge-base" legacyBehavior>
                    <a className={styles.infoLink}>Explore the Knowledge Base →</a>
                </Link>
            </p>
            <h3>General Inquiries</h3>
            <p>
              For press, partnerships, or other inquiries, you can also reach us at:
              <br />
              <a href="mailto:contact@colorverse.io" className={styles.infoLink}>contact@colorverse.io</a>
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <select id="subject" className={styles.select} defaultValue="">
                <option value="" disabled>Select a category...</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing & Subscription</option>
                <option value="feedback">Feedback & Suggestions</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;