// components/common/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>ColorVerse</h4>
          <ul>
            <li><Link href="/discover" legacyBehavior><a className={styles.footerLink}>Discover</a></Link></li>
            <li><Link href="/codex" legacyBehavior><a className={styles.footerLink}>The Codex</a></Link></li>
            <li><Link href="/status" legacyBehavior><a className={styles.footerLink}>System Status</a></Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/press" legacyBehavior><a className={styles.footerLink}>Press</a></Link></li>
            <li><Link href="/careers" legacyBehavior><a className={styles.footerLink}>Careers</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a className={styles.footerLink}>Contact Us</a></Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/legal/terms-of-service" legacyBehavior><a className={styles.footerLink}>Terms of Service</a></Link></li>
            <li><Link href="/legal/privacy-policy" legacyBehavior><a className={styles.footerLink}>Privacy Policy</a></Link></li>
            <li><Link href="/legal/community-guidelines" legacyBehavior><a className={styles.footerLink}>Community Guidelines</a></Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {currentYear} ColorVerse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;