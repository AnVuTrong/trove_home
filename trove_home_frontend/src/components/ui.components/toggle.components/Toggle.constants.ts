import { ToggleSize, ToggleVariant, ToggleSizeClasses } from './Toggle.types';

export const TOGGLE_DEFAULTS = {
  SIZE: 'md' as ToggleSize,
  VARIANT: 'primary' as ToggleVariant,
  DISABLED: false,
} as const;

export const TOGGLE_SIZE_CLASSES: Record<ToggleSize, ToggleSizeClasses> = {
  sm: {
    toggle: 'w-16 h-8',
    thumb: 'w-6 h-6',
    icon: 'w-4 h-4'
  },
  md: {
    toggle: 'w-20 h-10',
    thumb: 'w-8 h-8',
    icon: 'w-6 h-6'
  },
  lg: {
    toggle: 'w-24 h-12',
    thumb: 'w-10 h-10',
    icon: 'w-7 h-7'
  }
};

export const TOGGLE_VARIANT_CLASSES: Record<ToggleVariant, string> = {
  primary: 'bg-primary border-primary',
  success: 'bg-feedback-success border-feedback-success',
  accent: 'bg-accent border-accent'
};

export const TOGGLE_TRANSLATE_CLASSES: Record<ToggleSize, string> = {
  sm: 'translate-x-7',
  md: 'translate-x-9',
  lg: 'translate-x-11',
};

export const TOGGLE_BASE_CLASSES = {
  TOGGLE: 'relative inline-flex items-center justify-between border-2 rounded-md cursor-pointer transition-all duration-100 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-DEFAULT p-1',
  THUMB: 'absolute bg-white rounded-md shadow-lg transform transition-transform duration-100 ease-in-out z-10',
  ICON_LEFT: 'absolute left-2 z-20 flex items-center justify-center transition-all duration-100 ease-in-out',
  ICON_RIGHT: 'absolute right-2 z-20 flex items-center justify-center transition-all duration-100 ease-in-out',
  DISABLED: 'opacity-50 cursor-not-allowed',
  UNCHECKED_BG: 'bg-gray-200 border-gray-300',
  CONTAINER: 'flex items-center space-x-3',
  SIDE_CONTAINER: 'flex items-center space-x-1',
  LABEL_CONTAINER: 'flex flex-col items-center',
  LABEL: 'mt-1 text-xs text-text-light text-center dark:text-text-dark',
  SIDE_LABEL: 'text-sm font-medium transition-colors duration-300 ease-in-out',
  ACTIVE_TEXT: 'text-text-DEFAULT font-semibold',
  INACTIVE_TEXT: 'text-gray-400',
  ACTIVE_ICON: 'text-text-light opacity-100',
  INACTIVE_ICON: 'text-white opacity-90',
  THUMB_COVERED_ICON: 'text-gray-800 dark:text-gray-800 opacity-100',
  THUMB_UNCOVERED_ICON: 'text-white opacity-90',
} as const;