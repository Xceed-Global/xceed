import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Header />
      <main className="flex-1 mt-[var(--header-height,72px)]">{children}</main>
      <Footer />
    </div>
  );
}
