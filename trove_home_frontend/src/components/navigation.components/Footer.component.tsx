import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '../../routes/RouteConfig.route';
import TroveWordmarkGreen from '../../assets/trove_logo_v1/5_wordmark/5_wordmark_green_fit_svg.svg';
import TroveWordmarkWhite from '../../assets/trove_logo_v1/5_wordmark/5_wordmark_white_fit_svg.svg';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Get only routes that should be shown in navigation
  const navigationRoutes = Object.values(routeConfig).filter(route => route.showInNavigation);

  return (
    <footer className="bg-background-surface_dark dark:bg-background-dark text-text-light dark:text-text-dark py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              {/* Light theme wordmark */}
              <img 
                src={TroveWordmarkWhite} 
                alt="Trove Investment" 
                className="h-20 w-auto dark:hidden" 
              />
              {/* Dark theme wordmark */}
              <img 
                src={TroveWordmarkGreen} 
                alt="Trove Investment" 
                className="h-20 w-auto hidden dark:block" 
              />
            </div>
            <p className="text-sm text-text-light dark:text-text-dark">
              Developed by TROVE INVESTMENT
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-primary dark:text-primary-dark font-bold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {navigationRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200">
                    {t(route.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary dark:text-primary-dark font-bold mb-4">
              {t('footer.contactUs')}
            </h3>
            <p className="mb-2 text-text-light dark:text-text-dark">Email: vta.bsn@gmail.com</p>
            <p className="text-text-light dark:text-text-dark">Phone: +84 93 824 7283</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-text-light dark:text-text-dark">© {currentYear} TROVE INVESTMENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 