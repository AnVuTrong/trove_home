import React from 'react';

export interface FooterProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'detailed';
  showLogo?: boolean;
  showNavigation?: boolean;
  showContact?: boolean;
  showCopyright?: boolean;
  logoVariant?: 'horizontal' | 'vertical' | 'brandmark' | 'wordmark';
  'data-testid'?: string;
}

export interface FooterLogoProps {
  variant?: 'horizontal' | 'vertical' | 'brandmark' | 'wordmark';
  className?: string;
  'data-testid'?: string;
}

export interface FooterNavigationProps {
  className?: string;
  'data-testid'?: string;
}

export interface FooterContactProps {
  className?: string;
  'data-testid'?: string;
}

export interface FooterCopyrightProps {
  className?: string;
  'data-testid'?: string;
}

export type FooterVariant = 'default' | 'minimal' | 'detailed';
export type FooterLogoVariant = 'horizontal' | 'vertical' | 'brandmark' | 'wordmark'; 