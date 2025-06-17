  import React from 'react';
  import { Link } from 'react-router-dom';
  import { ROUTES } from '../../constants/Routes.constant';
  import { ThemeToggle } from '../ui.components';
  import LanguageToggle from './LanguageToggle.component';
  import NavigationMenu from './NavigationMenu.component';
  import TroveLogoGreen from '../../assets/trove_logo_v1/2_horizontal/2_horizontal_green_fit_svg.svg';
  import TroveLogoWhite from '../../assets/trove_logo_v1/2_horizontal/2_horizontal_white_fit_svg.svg';

  const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-sm hover:bg-white/90 hover:backdrop-blur-md dark:bg-black/10 dark:hover:bg-black/90 hover:shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to={ROUTES.HOME} className="flex items-center text-xl font-bold text-white hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors duration-300">
              {/* Light theme logo - now using white for overlay */}
              <img 
                src={TroveLogoGreen} 
                alt="Trove Logo" 
                className="h-14 w-auto mr-5 dark:hidden" 
              />
              {/* Dark theme logo */}
              <img 
                src={TroveLogoWhite} 
                alt="Trove Logo" 
                className="h-14 w-auto mr-5 hidden dark:block" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu />
              
              {/* Theme Toggle */}
              <ThemeToggle
                size="sm"
                variant="primary"
                showLabel={false}
                data-testid="theme-toggle"
              />
              
              {/* Language Toggle */}
              <LanguageToggle
                size="sm"
                variant="primary"
                showLabel={false}
                data-testid="language-toggle"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <ThemeToggle
                size="sm"
                variant="primary"
                showLabel={false}
                data-testid="mobile-theme-toggle"
              />
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline-none transition-colors duration-300"
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
            <div className="md:hidden mt-3 py-2 border-t border-white/20 hover:border-gray-200 dark:border-white/20 dark:hover:border-gray-700 transition-colors duration-300">
              <NavigationMenu isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
              <div className="mt-4 pt-2 border-t border-white/20 hover:border-gray-200 dark:border-white/20 dark:hover:border-gray-700 transition-colors duration-300">
                <LanguageToggle
                  size="sm"
                  variant="primary"
                  showLabel={true}
                  data-testid="mobile-language-toggle"
                />
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  export default Header; 