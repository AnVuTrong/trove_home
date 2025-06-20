import { ButtonVariant, ButtonSize } from './Button.types';

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary hover:bg-primary-light dark:bg-primary-dark dark:hover:bg-primary text-white border-primary dark:border-primary-dark',
  secondary:
    'bg-background-surface_dark hover:bg-text-light dark:bg-background-dark dark:hover:bg-background-surface_dark text-white border-background-surface_dark dark:border-background-dark',
  danger: 'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white border-red-600 dark:border-red-700',
  success:
    'bg-feedback-success hover:bg-feedback-success_light dark:bg-feedback-success dark:hover:bg-feedback-success_light text-white border-feedback-success',
  outline:
    'bg-transparent hover:bg-background-light dark:hover:bg-background-surface_dark text-text-DEFAULT dark:text-text-dark border-primary dark:border-primary-dark'
};

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
};

export const BUTTON_BASE_CLASSES =
  'font-medium rounded-md border transition-colors duration-200 focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-accent-DEFAULT dark:hover:ring-accent-dark dark:hover:ring-offset-background-dark';

export const BUTTON_DISABLED_CLASSES = 'opacity-50 cursor-not-allowed';
