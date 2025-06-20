import React from 'react';
import NavigationMenu from '../LanguageSwitcher.components/NavigationMenu.component';
import { HEADER_DESKTOP_NAV_CLASSES } from './Header.constants';

export interface HeaderDesktopNavigationProps {
  // No props currently, kept for future extensibility
}

const HeaderDesktopNavigation: React.FC<HeaderDesktopNavigationProps> = () => (
  <div className={HEADER_DESKTOP_NAV_CLASSES}>
    <NavigationMenu />
  </div>
);

export default HeaderDesktopNavigation; 