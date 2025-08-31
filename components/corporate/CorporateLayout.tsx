// components/corporate/CorporateLayout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/CorporateLayout.module.css';

const navLinks = [
    { href: '/corporate/dashboard', label: 'Dashboard' },
    { href: '/corporate/brandlock', label: 'Brandlock' },
    { href: '/corporate/benefits', label: 'Benefits' },
    { href: '/corporate/advertising/my-campaigns', label: 'Advertising' },
    { href: '/corporate/api', label: 'API Access' },
    { href: '/corporate/billing', label: 'Billing' },
];

const CorporateLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const brandName = 'Stark Industries'; // Placeholder

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.brandLogo}>
                    <div>S</div>
                    <div className={styles.brandName}>{brandName}</div>
                </div>
                <ul className={styles.navList}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} legacyBehavior>
                                <a className={`${styles.navLink} ${router.pathname.startsWith(link.href) ? styles.active : ''}`}>
                                    {link.label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
};
export default CorporateLayout;