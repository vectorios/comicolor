// components/app/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Link href="/app/dashboard" legacyBehavior><a className={styles.logo}>ColorVerse</a></Link>
      <nav className={styles.nav}>
        <Link href="/app/dashboard" legacyBehavior><a className={styles.navLink}>Dashboard</a></Link>
        <Link href="/app/registry" legacyBehavior><a className={styles.navLink}>The Registry</a></Link>
        <Link href="/app/market" legacyBehavior><a className={styles.navLink}>The Market</a></Link>
        <Link href="/app/verse" legacyBehavior><a className={styles.navLink}>The Verse</a></Link>
        <Link href="/app/studio" legacyBehavior><a className={styles.navLink}>Studio</a></Link>
        <Link href="/app/factions" legacyBehavior><a className={styles.navLink}>Factions</a></Link>
      </nav>
    </aside>
  );
};
export default Sidebar;