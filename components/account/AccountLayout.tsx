// components/account/AccountLayout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/AccountLayout.module.css';

const navItems = [
    { title: 'My Identity', links: [
        { href: '/account/profile', label: 'Edit Profile' },
        { href: '/account/security', label: 'Security' },
    ]},
    { title: 'My Assets', links: [
        { href: '/account/properties', label: 'My Colors' },
        { href: '/account/properties/creations', label: 'My Creations' },
        { href: '/account/wallet', label: 'Wallet' },
    ]},
     { title: 'My Citizenry', links: [
        { href: '/account/subscription', label: 'Subscription' },
        { href: '/account/my-faction', label: 'My Faction' },
        { href: '/account/notifications', label: 'Notifications' },
    ]}
];

const AccountLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                {navItems.map(section => (
                    <div key={section.title}>
                        <h2>{section.title}</h2>
                        <ul className={styles.navList}>
                            {section.links.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} legacyBehavior>
                                        <a className={`${styles.navLink} ${router.pathname === link.href ? styles.active : ''}`}>
                                            {link.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
};

export default AccountLayout;