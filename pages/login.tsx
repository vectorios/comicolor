// pages/login.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Auth.module.css'; // We reuse the same styles!

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle login logic (API call, etc.) here
    alert('Login form submitted!');
  };

  return (
    <>
      <Head>
        <title>Login - ColorVerse Frontier Post</title>
        <meta name="description" content="Log in to your ColorVerse Guardian account." />
      </Head>
      <div className={styles.authContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Welcome Back, Guardian</h1>
          <p className={styles.subtitle}>Enter the Verse through the Frontier Post.</p>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.input} required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" className={styles.input} required />
          </div>

          <div className={styles.forgotPassword}>
            <Link href="/reset-password" legacyBehavior>
                <a className={styles.footerLink}>Forgot Password?</a>
            </Link>
          </div>

          <button type="submit" className={styles.submitButton}>
            Log In
          </button>

          <p className={styles.footerText}>
            Not a Guardian yet?{' '}
            <Link href="/register" legacyBehavior><a className={styles.footerLink}>Take the Oath</a></Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;