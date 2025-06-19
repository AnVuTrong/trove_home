import React from 'react';

export type AuthFormMode = 'login' | 'register' | 'forgot-password';

export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  agreeToTerms?: boolean;
}

export interface AuthFormValidation {
  isValid: boolean;
  errors: Record<keyof AuthFormData, string>;
}

export interface AuthPageLayoutProps {
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

export interface AuthImageSectionProps {
  imageSrc: string;
  imageAlt?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  className?: string;
  'data-testid'?: string;
}

export interface AuthFormSectionProps {
  mode: AuthFormMode;
  onModeChange: (mode: AuthFormMode) => void;
  onSubmit: (data: AuthFormData) => void;
  onKeycloakLogin?: () => void;
  onGoogleLogin?: () => void;
  loading?: boolean;
  className?: string;
  'data-testid'?: string;
}

export interface LoginSectionProps {
  initialMode?: AuthFormMode;
  imageSrc: string;
  imageAlt?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  onSubmit: (data: AuthFormData, mode: AuthFormMode) => void;
  onKeycloakLogin?: () => void;
  onGoogleLogin?: () => void;
  loading?: boolean;
  className?: string;
  'data-testid'?: string;
}

export interface FormFieldProps {
  label: string;
  name: keyof AuthFormData;
  type: 'text' | 'email' | 'password' | 'checkbox';
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  'data-testid'?: string;
} 