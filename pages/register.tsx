// pages/register.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../styles/Auth.module.css';

const RegisterPage = () => {
  const router = useRouter(); // Initialise le router
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Envoyer les données à notre API
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Si tout s'est bien passé (statut 201), rediriger vers le dashboard
      router.push('/app/dashboard');
    } else {
      // Sinon, afficher le message d'erreur de l'API
      setError(data.message || 'An unknown error occurred.');
      setIsLoading(false);
    }
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
          
          {/* Affiche le message d'erreur s'il y en a un */}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Guardian Name (Username)</label>
            <input 
              type="text" 
              id="username" 
              className={styles.input} 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>

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
            <label htmlFor="password" className={styles.label}>Password (min. 8 characters)</label>
            <input 
              type="password" 
              id="password" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="codex" className={styles.checkbox} required />
            <label htmlFor="codex">
              I have read and agree to the{' '}
              <Link href="/codex" legacyBehavior><a className={styles.codexLink} target="_blank">Chromatic Codex</a></Link>.
            </label>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Become a Guardian'}
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