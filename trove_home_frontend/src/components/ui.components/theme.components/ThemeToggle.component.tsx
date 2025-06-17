import React from 'react';
import { Toggle } from '../index';
import { useTheme } from '../../../contexts/ThemeContext.context';
import { SunIcon, MoonIcon } from './ThemeToggleIcons.component';

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'accent';
  showLabel?: boolean;
  showIcons?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  label?: string;
  className?: string;
  'data-testid'?: string;
}



const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'sm',
  variant = 'primary',
  showLabel = true,
  showIcons = true,
  leftLabel = 'Light',
  rightLabel = 'Dark',
  label = 'Theme',
  className = '',
  'data-testid': dataTestId = 'theme-toggle',
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Toggle
      checked={isDarkMode}
      onChange={toggleTheme}
      leftIcon={showIcons ? <SunIcon /> : undefined}
      rightIcon={showIcons ? <MoonIcon /> : undefined}
      size={size}
      variant={variant}
      label={showLabel ? label : undefined}
      className={className}
      data-testid={dataTestId}
    />
  );
};

export default ThemeToggle; 