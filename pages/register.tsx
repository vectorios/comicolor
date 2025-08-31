// pages/register.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Auth.module.css';

const RegisterPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission logic here
    alert('Registration form submitted!');
  };

  return (
    <>
      <Head>
        <title>Register - Take the Guardian's Oath</title>
        <meta name="description" content="Become a Guardian of ColorVerse by creating your account." />
      </Head>
      <div className={styles.authContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Take the Guardian's Oath</h1>
          <p className={styles.subtitle}>Create your account to begin your journey.</p>

          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Guardian Name (Username)</label>
            <input type="text" id="username" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.input} required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" className={styles.input} required />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="codex" className={styles.checkbox} required />
            <label htmlFor="codex">
              I have read and agree to the{' '}
              <Link href="/codex" legacyBehavior><a className={styles.codexLink} target="_blank">Chromatic Codex</a></Link>.
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Become a Guardian
          </button>

          <p className={styles.footerText}>
            Already a Guardian?{' '}
            <Link href="/login" legacyBehavior><a className={styles.footerLink}>Log In</a></Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;