import { SubpageHeroVariant, SubpageHeroSize } from './SubpageHeroSection.types';

/**
 * Base CSS classes for different hero variants
 */
export const SUBPAGE_HERO_VARIANT_CLASSES = {
  [SubpageHeroVariant.IMAGE_OVERLAY]: {
    container: 'bg-cover bg-center bg-no-repeat relative',
    overlay: 'absolute inset-0 bg-gradient-to-br from-primary/70 to-green-600/60 dark:from-primary/80 dark:to-green-800/70',
    content: 'relative z-10 text-center',
    title: 'text-white drop-shadow-lg',
    description: 'text-white/95 drop-shadow-md'
  },
  [SubpageHeroVariant.GRADIENT]: {
    container: 'bg-gradient-to-br from-primary/10 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
    overlay: '',
    content: 'text-center',
    title: 'text-gray-900 dark:text-white',
    description: 'text-gray-600 dark:text-gray-300'
  },
  [SubpageHeroVariant.SOLID]: {
    container: 'bg-white dark:bg-gray-900',
    overlay: '',
    content: 'text-center',
    title: 'text-gray-900 dark:text-white',
    description: 'text-gray-600 dark:text-gray-300'
  }
} as const;

/**
 * Base CSS classes for different hero sizes
 */
export const SUBPAGE_HERO_SIZE_CLASSES = {
  [SubpageHeroSize.SMALL]: 'min-h-[40vh] py-16',
  [SubpageHeroSize.MEDIUM]: 'min-h-[60vh] py-20',
  [SubpageHeroSize.LARGE]: 'min-h-[80vh] py-24'
} as const;

/**
 * Common CSS classes for hero elements
 */
export const SUBPAGE_HERO_COMMON_CLASSES = {
  baseContainer: 'flex flex-col items-center justify-center px-4',
  contentContainer: 'max-w-4xl mx-auto',
  baseTitle: 'font-bold mb-6',
  baseDescription: 'leading-relaxed max-w-3xl mx-auto',
  responsiveTitle: 'text-4xl md:text-5xl lg:text-6xl',
  responsiveDescription: 'text-lg md:text-xl'
} as const;

/**
 * Default configuration values
 */
export const SUBPAGE_HERO_DEFAULTS = {
  variant: SubpageHeroVariant.GRADIENT,
  size: SubpageHeroSize.MEDIUM,
  overlayOpacity: 70
} as const; 