// pages/login.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push('/app/dashboard');
    } else {
      setError(data.message || 'An error occurred.');
      setIsLoading(false);
    }
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

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input 
              type="password" 
              id="password" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <Link href="/reset-password" legacyBehavior>
                <a className={styles.footerLink}>Forgot Password?</a>
            </Link>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
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