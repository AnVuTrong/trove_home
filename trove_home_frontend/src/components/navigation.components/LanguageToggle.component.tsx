import React from 'react';
import { Toggle } from '../ui.components';
import { useLanguage } from '../../contexts/LanguageContext.context';
import { EnIcon, ViIcon } from './LanguageSwitcherIcons.component';

interface LanguageToggleProps {
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

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  size = 'sm',
  variant = 'primary',
  showLabel = false,
  showIcons = true,
  leftLabel = 'English',
  rightLabel = 'Vietnamese',
  label = 'Language',
  className = '',
  'data-testid': dataTestId = 'language-toggle',
}) => {
  const { language, setLanguage } = useLanguage();
  
  // English is false (left), Vietnamese is true (right)
  const isVietnamese = language === 'vi';

  const handleToggle = (checked: boolean) => {
    setLanguage(checked ? 'vi' : 'en');
  };

  return (
    <Toggle
      checked={isVietnamese}
      onChange={handleToggle}
      leftIcon={showIcons ? <EnIcon /> : undefined}
      rightIcon={showIcons ? <ViIcon /> : undefined}
      size={size}
      variant={variant}
      label={showLabel ? label : undefined}
      leftLabel={showLabel ? leftLabel : undefined}
      rightLabel={showLabel ? rightLabel : undefined}
      className={className}
      data-testid={dataTestId}
    />
  );
};

export default LanguageToggle; 