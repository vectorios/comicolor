// components/app/AppLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import styles from '../../styles/AppLayout.module.css';

type AppLayoutProps = { children: ReactNode };

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* We can add a Topbar component here later */}
        {children}
      </main>
    </div>
  );
};
export default AppLayout;