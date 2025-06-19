import { AuthFormMode } from './Auth.types';

// Validation Rules
export const AUTH_FORM_VALIDATION_RULES = {
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MIN_LENGTH: 5,
    MAX_LENGTH: 254
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: /^[a-zA-Z\s'-]+$/
  }
} as const;

// Page Layout Classes
export const AUTH_PAGE_CLASSES = {
  CONTAINER: 'min-h-screen flex bg-background-light dark:bg-background-dark',
  RESPONSIVE_LAYOUT: 'w-full flex flex-col lg:flex-row',
  MOBILE_SPACING: 'px-4 py-8 lg:p-0'
} as const;

// Image Section Classes
export const AUTH_IMAGE_CLASSES = {
  CONTAINER: 'relative lg:w-1/2 bg-gradient-to-br from-primary to-primary-dark overflow-hidden',
  MOBILE_HEIGHT: 'h-48 lg:h-full',
  IMAGE: 'absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30',
  OVERLAY: 'relative z-10 flex flex-col justify-center items-center h-full p-8 text-white',
  TITLE: 'text-2xl lg:text-4xl font-bold text-center mb-4',
  SUBTITLE: 'text-lg lg:text-xl text-center opacity-90 max-w-md'
} as const;

// Form Section Classes
export const AUTH_FORM_CLASSES = {
  CONTAINER: 'lg:w-1/2 flex items-center justify-center p-8 lg:p-12',
  FORM_WRAPPER: 'w-full max-w-md space-y-6',
  HEADER: 'text-center mb-8',
  TITLE: 'text-3xl font-bold text-text-DEFAULT dark:text-text-dark mb-2',
  SUBTITLE: 'text-text-light dark:text-text-muted',
  FORM: 'space-y-4',
  FIELD_GROUP: 'space-y-1',
  LABEL: 'block text-sm font-medium text-text-DEFAULT dark:text-text-dark',
  INPUT: 'w-full px-3 py-2 border border-border-light dark:border-border-dark rounded-md shadow-sm placeholder-text-light dark:placeholder-text-muted bg-background-light dark:bg-background-surface_dark text-text-DEFAULT dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
  INPUT_ERROR: 'border-feedback-error dark:border-feedback-error focus:ring-feedback-error',
  CHECKBOX_CONTAINER: 'flex items-center space-x-2',
  CHECKBOX: 'h-4 w-4 text-primary focus:ring-primary border-border-light dark:border-border-dark rounded',
  ERROR_MESSAGE: 'text-sm text-feedback-error mt-1',
  SUBMIT_BUTTON: 'w-full',
  DIVIDER: 'relative my-6',
  DIVIDER_LINE: 'absolute inset-0 flex items-center',
  DIVIDER_TEXT: 'relative flex justify-center text-sm',
  SOCIAL_BUTTONS: 'space-y-3',
  SOCIAL_BUTTON: 'w-full flex items-center justify-center px-4 py-2 border border-border-light dark:border-border-dark rounded-md shadow-sm text-sm font-medium text-text-DEFAULT dark:text-text-dark bg-background-light dark:bg-background-surface_dark hover:bg-background-surface_light dark:hover:bg-background-surface_dark transition-colors duration-200',
  MODE_TOGGLE: 'text-center mt-6',
  MODE_TOGGLE_TEXT: 'text-sm text-text-light dark:text-text-muted',
  MODE_TOGGLE_LINK: 'font-medium text-primary hover:text-primary-light dark:text-primary-dark dark:hover:text-primary cursor-pointer'
} as const;

// Form Mode Configuration
export const AUTH_FORM_MODE_CONFIG: Record<AuthFormMode, {
  title: string;
  subtitle: string;
  submitText: string;
  toggleText: string;
  toggleLinkText: string;
  toggleMode: AuthFormMode;
}> = {
  login: {
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    submitText: 'Sign in',
    toggleText: "Don't have an account?",
    toggleLinkText: 'Sign up',
    toggleMode: 'register'
  },
  register: {
    title: 'Create account',
    subtitle: 'Get started with your free account',
    submitText: 'Create account',
    toggleText: 'Already have an account?',
    toggleLinkText: 'Sign in',
    toggleMode: 'login'
  },
  'forgot-password': {
    title: 'Reset password',
    subtitle: 'Enter your email to reset your password',
    submitText: 'Send reset link',
    toggleText: 'Remember your password?',
    toggleLinkText: 'Sign in',
    toggleMode: 'login'
  }
} as const;

// Security Headers (for future API calls)
export const AUTH_SECURITY_HEADERS = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block'
} as const; 