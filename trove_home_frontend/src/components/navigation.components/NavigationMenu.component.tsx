import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '../../routes/RouteConfig.route';

interface NavigationMenuProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isMobile = false, onItemClick }) => {
  const { t } = useTranslation();
  
  // Get only routes that should be shown in navigation
  const navigationRoutes = Object.values(routeConfig).filter(route => route.showInNavigation);
  
  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-6'}`}>
      {navigationRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) => 
            `flex items-center px-2 py-1 transition-colors duration-200 ${
              isActive 
                ? 'text-primary font-semibold'
                : 'text-text-secondary hover:text-primary'
            }`
          }
          onClick={onItemClick}
        >
          {route.icon && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={route.icon} />
            </svg>
          )}
          <span>{t(route.translationKey)}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationMenu; 