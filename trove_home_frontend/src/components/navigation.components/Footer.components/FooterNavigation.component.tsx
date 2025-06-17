import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '../../../routes/RouteConfig.route';

const FooterNavigation: React.FC = () => {
  const { t } = useTranslation();
  
  // Get only routes that should be shown in navigation
  const navigationRoutes = Object.values(routeConfig).filter(route => route.showInNavigation);

  return (
    <div>
      <h3 className="text-primary dark:text-primary-dark font-bold mb-4">
        {t('footer.quickLinks')}
      </h3>
      <ul className="space-y-2">
        {navigationRoutes.map((route) => (
          <li key={route.path}>
            <Link 
              to={route.path} 
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200"
            >
              {t(route.translationKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigation; 