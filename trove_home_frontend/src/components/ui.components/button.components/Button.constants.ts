import { ButtonVariant, ButtonSize } from './Button.types';

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary hover:bg-primary-dark text-white border-primary',
  secondary: 'bg-neutral hover:bg-text-secondary text-white border-neutral',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
  success: 'bg-accent hover:bg-accent-light text-white border-accent',
  outline: 'bg-transparent hover:bg-background-secondary text-text-primary border-primary'
};

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
};

export const BUTTON_BASE_CLASSES = 'font-medium rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

export const BUTTON_DISABLED_CLASSES = 'opacity-50 cursor-not-allowed'; 