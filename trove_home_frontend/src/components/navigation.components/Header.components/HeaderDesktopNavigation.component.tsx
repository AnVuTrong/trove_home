import React from 'react';
import { ThemeToggle } from '../../ui.components';
import LanguageToggle from '../LanguageSwitcher.components/LanguageToggle.component';
import NavigationMenu from '../LanguageSwitcher.components/NavigationMenu.component';
import { HEADER_DESKTOP_NAV_CLASSES } from './Header.constants';

export interface HeaderDesktopNavigationProps {
  showThemeToggle?: boolean;
  showLanguageToggle?: boolean;
}

const HeaderDesktopNavigation: React.FC<HeaderDesktopNavigationProps> = ({
  showThemeToggle = true,
  showLanguageToggle = true
}) => (
  <div className={HEADER_DESKTOP_NAV_CLASSES}>
    <NavigationMenu />

    {showThemeToggle && (
      <ThemeToggle
        size='sm'
        variant='primary'
        showLabel={false}
        data-testid='theme-toggle'
      />
    )}

    {showLanguageToggle && (
      <LanguageToggle
        size='sm'
        variant='primary'
        showLabel={false}
        data-testid='language-toggle'
      />
    )}
  </div>
);

export default HeaderDesktopNavigation; 