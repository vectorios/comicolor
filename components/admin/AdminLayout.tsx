// components/admin/AdminLayout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/AdminLayout.module.css';

const navSections = [
    { title: 'Core', links: [
        { href: '/admin/dashboard', label: 'Dashboard' },
        { href: '/admin/settings/general', label: 'Settings' },
    ]},
    { title: 'Management', links: [
        { href: '/admin/guardians', label: 'Guardians' },
        { href: '/admin/registry/overview', label: 'Registry' },
        { href: '/admin/economy/market-supervision', label: 'Economy' },
        { href: '/admin/partners', label: 'Partners' },
    ]},
    { title: 'Justice & Support', links: [
        { href: '/admin/moderation/queue', label: 'Moderation' },
        { href: '/admin/justice/dashboard', label: 'Justice System' },
        { href: '/admin/support/tickets', label: 'Support Tickets' },
    ]},
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.header}>ColorVerse <span>Admin</span></div>
                <ul className={styles.navList}>
                    {navSections.map(section => (
                        <div key={section.title}>
                            <h3 className={styles.navSectionTitle}>{section.title}</h3>
                            {section.links.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} legacyBehavior>
                                        <a className={`${styles.navLink} ${router.pathname.startsWith(link.href) ? styles.active : ''}`}>
                                            {link.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            </aside>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
};
export default AdminLayout;