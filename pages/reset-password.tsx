// pages/reset-password.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Auth.module.css'; // Reusing the same styles again!

const ResetPasswordPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger an API call to send the reset email
    alert('If an account with this email exists, a reset link has been sent.');
  };

  return (
    <>
      <Head>
        <title>Reset Password - ColorVerse</title>
        <meta name="description" content="Reset your ColorVerse Guardian account password." />
      </Head>
      <div className={styles.authContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Reset Your Password</h1>
          <p className={styles.subtitle}>
            Enter your email address and we'll send you a link to get back into your account.
          </p>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.input} required />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Reset Link
          </button>

          <p className={styles.footerText}>
            Remembered your password?{' '}
            <Link href="/login" legacyBehavior><a className={styles.footerLink}>Log In</a></Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordPage;