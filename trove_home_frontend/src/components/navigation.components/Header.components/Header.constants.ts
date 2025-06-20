import { HeaderMaxWidth } from './Header.types';

export const HEADER_BASE_CLASSES =
  'fixed top-5 left-1/2 transform -translate-x-1/2 w-full mx-auto px-8 z-50 transition-all duration-150 ease-in-out rounded-2xl';

export const HEADER_SCROLLED_CLASSES = 'border-5 bg-white/50 backdrop-blur-xl shadow-2xl dark: dark:bg-black/50';

export const HEADER_DEFAULT_CLASSES = 'border-5 bg-white/10 backdrop-blur-lg dark:bg-black/10';

export const HEADER_HOVER_CLASSES = 'hover:bg-white/50 hover:backdrop-blur-md dark:hover:bg-black/80';

export const HEADER_CONTAINER_CLASSES = 'container mx-auto px-4 py-3';

export const HEADER_CONTENT_CLASSES = 'relative flex items-center justify-between';

export const HEADER_LOGO_CLASSES =
  'flex items-center flex-shrink-0 text-xl font-bold text-white hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors duration-150';

export const HEADER_DESKTOP_NAV_CLASSES = 'hidden lg:flex absolute left-1/2 -translate-x-1/2 transform items-center space-x-4';

export const HEADER_MOBILE_BUTTON_CLASSES = 'lg:hidden flex items-center space-x-2';

export const HEADER_MOBILE_MENU_CLASSES =
  'lg:hidden mt-3 py-2 border-t border-white/20 hover:border-gray-200 dark:border-white/20 dark:hover:border-gray-700 transition-colors duration-150';

export const HEADER_DESKTOP_CONTROLS_CLASSES = 'hidden lg:flex items-center space-x-4';

export const HEADER_MAX_WIDTH_CLASSES: Record<HeaderMaxWidth, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '6xl': 'max-w-6xl',
  full: 'max-w-full'
};

export const LOGO_IMAGE_CLASSES = 'h-14 w-auto mr-5';

export const MOBILE_MENU_BUTTON_CLASSES =
  'text-white hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline-none transition-colors duration-150';

export const MOBILE_MENU_SEPARATOR_CLASSES =
  'mt-4 pt-2 border-t border-white/20 hover:border-gray-200 dark:border-white/20 dark:hover:border-gray-700 transition-colors duration-150';
