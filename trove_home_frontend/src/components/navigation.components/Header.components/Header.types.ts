import React from 'react';

export interface HeaderProps {
  className?: string;
  logoVariant?: 'horizontal' | 'vertical' | 'brandmark' | 'wordmark';
  showThemeToggle?: boolean;
  showLanguageToggle?: boolean;
  isFixed?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl' | 'full';
  'data-testid'?: string;
}

export interface HeaderState {
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  isHovered: boolean;
}

export type LogoVariant = 'horizontal' | 'vertical' | 'brandmark' | 'wordmark';
export type HeaderMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl' | 'full'; 