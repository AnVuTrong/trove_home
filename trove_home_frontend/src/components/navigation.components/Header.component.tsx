import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes.constant';
import { Toggle } from '../ui.components';
import { useTheme } from '../../contexts/ThemeContext.context';
import LanguageSwitcher from './LanguageSwitcher.component';
import NavigationMenu from './NavigationMenu.component';
import TroveLogo from '../../assets/trove_images/trove_simple_green_logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Sun icon component
  const SunIcon: React.FC = () => (
    <svg 
      className="w-4 h-4" 
      fill="currentColor" 
      viewBox="0 0 20 20" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  // Moon icon component
  const MoonIcon: React.FC = () => (
    <svg 
      className="w-4 h-4" 
      fill="currentColor" 
      viewBox="0 0 20 20" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" 
      />
    </svg>
  );

  return (
    <header className="bg-background-primary shadow-md sticky top-0 z-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center text-xl font-bold text-primary dark:text-white">
            <img src={TroveLogo} alt="Trove Logo" className="h-8 w-auto mr-2" />
            TROVE INVESTMENT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu />
            
            {/* Theme Toggle */}
            <Toggle
              checked={isDarkMode}
              onChange={toggleTheme}
              leftIcon={<SunIcon />}
              rightIcon={<MoonIcon />}
              size="sm"
              variant="primary"
              label="Theme"
              data-testid="theme-toggle"
            />
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Toggle
              checked={isDarkMode}
              onChange={toggleTheme}
              leftIcon={<SunIcon />}
              rightIcon={<MoonIcon />}
              size="sm"
              variant="primary"
              data-testid="mobile-theme-toggle"
            />
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary dark:text-white focus:outline-none"
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
          <div className="md:hidden mt-3 py-2 border-t border-gray-200 dark:border-gray-700">
            <NavigationMenu isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
            <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 