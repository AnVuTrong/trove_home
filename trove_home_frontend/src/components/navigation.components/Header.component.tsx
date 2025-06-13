import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes.constant';
import LanguageSwitcher from './LanguageSwitcher.component';
import NavigationMenu from './NavigationMenu.component';
import TroveLogo from '../../assets/trove_images/trove_simple_green_logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-background-primary shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center text-xl font-bold text-primary">
            <img src={TroveLogo} alt="Trove Logo" className="h-8 w-auto mr-2" />
            TROVE INVESTMENT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary focus:outline-none ml-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-2 border-t border-gray-200">
            <NavigationMenu isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
            <div className="mt-4 pt-2 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 