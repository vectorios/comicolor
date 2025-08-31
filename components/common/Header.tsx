// components/common/Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <a className={styles.logo}>ColorVerse</a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/discover" legacyBehavior><a className={styles.navLink}>Discover</a></Link>
        <Link href="/codex" legacyBehavior><a className={styles.navLink}>Codex</a></Link>
        <Link href="/pricing" legacyBehavior><a className={styles.navLink}>Pricing</a></Link>
        <Link href="/for-brands" legacyBehavior><a className={styles.navLink}>For Brands</a></Link>
      </nav>
      <div className={styles.authButtons}>
        <Link href="/login" legacyBehavior>
            <a className={styles.loginButton}>Login</a>
        </Link>
        {/* We reuse the CTA style from the home page for registration */}
        <Link href="/register" legacyBehavior>
            <a className="ctaButtonShared">Register</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;