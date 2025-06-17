import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation.components/Header.component';
import Footer from '../components/navigation.components/Footer.component';
import { LanguageProvider } from '../contexts/LanguageContext.context';

const MainLayout: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-DEFAULT dark:text-text-dark transition-colors duration-150">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default MainLayout; 