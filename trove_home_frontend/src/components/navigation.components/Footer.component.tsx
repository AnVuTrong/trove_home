import React from 'react';
import { 
  FooterLogo, 
  FooterNavigation, 
  FooterContact, 
  FooterCopyright 
} from './Footer.components';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-DEFAULT dark:bg-background-surface_dark text-text-light dark:text-text-dark_h1 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <FooterLogo />

          {/* Navigation */}
          <FooterNavigation />

          {/* Contact */}
          <FooterContact />
        </div>

        {/* Copyright */}
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer; 