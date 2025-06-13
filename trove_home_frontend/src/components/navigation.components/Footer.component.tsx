import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '../../routes/RouteConfig.route';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Get only routes that should be shown in navigation
  const navigationRoutes = Object.values(routeConfig).filter(route => route.showInNavigation);

  return (
    <footer className="bg-background-secondary text-text-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-primary font-bold mb-4">TROVE INVESTMENT</h3>
            <p className="text-sm">
              Developed by TROVE INVESTMENT
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-primary font-bold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {navigationRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className="hover:text-primary transition-colors duration-200">
                    {t(route.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-bold mb-4">
              {t('footer.contactUs')}
            </h3>
            <p className="mb-2">Email: vta.bsn@gmail.com</p>
            <p>Phone: +84 93 824 7283</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p>© {currentYear} TROVE INVESTMENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 