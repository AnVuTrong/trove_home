import React from 'react';
import { ThemeToggle } from '../../ui.components';
import { HEADER_MOBILE_BUTTON_CLASSES, MOBILE_MENU_BUTTON_CLASSES } from './Header.constants';

export interface HeaderMobileMenuButtonProps {
  showThemeToggle?: boolean;
  isMobileMenuOpen: boolean;
  onToggle: () => void;
}

const HeaderMobileMenuButton: React.FC<HeaderMobileMenuButtonProps> = ({ showThemeToggle = true, isMobileMenuOpen, onToggle }) => (
  <div className={HEADER_MOBILE_BUTTON_CLASSES}>
    {showThemeToggle && <ThemeToggle size='sm' variant='primary' showLabel={false} data-testid='mobile-theme-toggle' />}

    <button onClick={onToggle} className={MOBILE_MENU_BUTTON_CLASSES} aria-label='Toggle mobile menu'>
      <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        {isMobileMenuOpen ? (
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
        ) : (
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
        )}
      </svg>
    </button>
  </div>
);

export default HeaderMobileMenuButton;
