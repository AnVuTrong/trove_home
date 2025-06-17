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
            `flex items-center px-3 py-2 rounded-md transition-all duration-150 ${
              isActive 
                ? 'text-text-light dark:text-text-dark bg-white/20 hover:bg-white/30 font-semibold backdrop-blur-sm'
                : 'text-text-light dark:text-text-dark hover:text-text-light dark:hover:text-text-dark hover:bg-white/10 hover:backdrop-blur-sm'
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