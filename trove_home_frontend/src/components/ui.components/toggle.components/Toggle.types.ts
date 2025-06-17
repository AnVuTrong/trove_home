import React from 'react';

export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleVariant = 'primary' | 'success' | 'accent';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: ToggleSize;
  variant?: ToggleVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
  'data-testid'?: string;
}

export interface ToggleSizeClasses {
  toggle: string;
  thumb: string;
  icon: string;
} 