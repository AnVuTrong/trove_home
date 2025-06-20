import React from 'react';
import LanguageToggle from '../LanguageSwitcher.components/LanguageToggle.component';
import NavigationMenu from '../LanguageSwitcher.components/NavigationMenu.component';
import { HEADER_MOBILE_MENU_CLASSES, MOBILE_MENU_SEPARATOR_CLASSES } from './Header.constants';

export interface HeaderMobileMenuProps {
  showLanguageToggle?: boolean;
  isMobileMenuOpen: boolean;
  onClose: () => void;
}

const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({ showLanguageToggle = true, isMobileMenuOpen, onClose }) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className={HEADER_MOBILE_MENU_CLASSES}>
      <NavigationMenu isMobile onItemClick={onClose} />

      {showLanguageToggle && (
        <div className={MOBILE_MENU_SEPARATOR_CLASSES}>
          <LanguageToggle size='sm' variant='primary' showLabel={true} data-testid='mobile-language-toggle' />
        </div>
      )}
    </div>
  );
};

export default HeaderMobileMenu;
