// components/app/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter(); // Initialise le router

  const handleLogout = async () => {
    // Appelle notre API de déconnexion
    const response = await fetch('/api/auth/logout', { method: 'POST' });
    
    if (response.ok) {
      // Si l'API a réussi, redirige l'utilisateur vers la page d'accueil
      router.push('/');
    } else {
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div> {/* Conteneur pour le logo et la nav principale */}
        <Link href="/app/dashboard" legacyBehavior><a className={styles.logo}>ColorVerse</a></Link>
        <nav className={styles.nav}>
          <Link href="/app/dashboard" legacyBehavior><a className={styles.navLink}>Dashboard</a></Link>
          <Link href="/app/registry" legacyBehavior><a className={styles.navLink}>The Registry</a></Link>
          <Link href="/app/market" legacyBehavior><a className={styles.navLink}>The Market</a></Link>
          <Link href="/app/verse" legacyBehavior><a className={styles.navLink}>The Verse</a></Link>
          <Link href="/app/studio" legacyBehavior><a className={styles.navLink}>Studio</a></Link>
          <Link href="/app/factions" legacyBehavior><a className={styles.navLink}>Factions</a></Link>
        </nav>
      </div>

      {/* --- NOUVELLE SECTION --- */}
      <div className={styles.sidebarFooter}>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
      {/* --- FIN DE LA NOUVELLE SECTION --- */}
    </aside>
  );
};

export default Sidebar;