import React from 'react';
import { ThemeToggle } from '../../ui.components';
import LanguageToggle from '../LanguageSwitcher.components/LanguageToggle.component';
import { HEADER_DESKTOP_CONTROLS_CLASSES } from './Header.constants';

export interface HeaderDesktopControlsProps {
  showThemeToggle?: boolean;
  showLanguageToggle?: boolean;
}

const HeaderDesktopControls: React.FC<HeaderDesktopControlsProps> = ({
  showThemeToggle = true,
  showLanguageToggle = true
}) => (
  <div className={HEADER_DESKTOP_CONTROLS_CLASSES}>
    {showThemeToggle && <ThemeToggle size='sm' variant='primary' showLabel={false} data-testid='desktop-theme-toggle' />}
    {showLanguageToggle && <LanguageToggle size='sm' variant='primary' showLabel={false} data-testid='desktop-language-toggle' />}
  </div>
);

export default HeaderDesktopControls; 