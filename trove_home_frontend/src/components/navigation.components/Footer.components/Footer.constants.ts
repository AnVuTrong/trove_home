import { FooterVariant } from './Footer.types';

export const FOOTER_BASE_CLASSES = 'bg-background-DEFAULT dark:bg-background-surface_dark text-text-light dark:text-text-dark_h1 py-8 transition-colors duration-300';

export const FOOTER_CONTAINER_CLASSES = 'container mx-auto px-4';

export const FOOTER_GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-3 gap-8';

export const FOOTER_VARIANT_CLASSES: Record<FooterVariant, string> = {
  default: 'py-8',
  minimal: 'py-4',
  detailed: 'py-12'
};

// Footer Logo Constants
export const FOOTER_LOGO_CONTAINER_CLASSES = 'w-full mb-8 md:mb-0';

export const FOOTER_LOGO_IMAGE_CONTAINER_CLASSES = 'mb-4';

export const FOOTER_LOGO_IMAGE_CLASSES = 'h-10 w-auto';

export const FOOTER_LOGO_DESCRIPTION_CLASSES = 'text-text-light dark:text-text-dark leading-relaxed';

// Footer Navigation Constants
export const FOOTER_NAV_TITLE_CLASSES = 'text-primary dark:text-text-dark_h1 font-bold mb-4';

export const FOOTER_NAV_LIST_CLASSES = 'space-y-2';

export const FOOTER_NAV_ITEM_CLASSES = 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200';

// Footer Contact Constants
export const FOOTER_CONTACT_TITLE_CLASSES = 'text-primary dark:text-text-dark_h1 font-bold mb-4';

export const FOOTER_CONTACT_LIST_CLASSES = 'space-y-2';

export const FOOTER_CONTACT_ITEM_CLASSES = 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark transition-colors duration-200';

// Footer Copyright Constants
export const FOOTER_COPYRIGHT_CONTAINER_CLASSES = 'mt-8 pt-4 border-t border-background-surface_dark dark:border-background-dark';

export const FOOTER_COPYRIGHT_TEXT_CLASSES = 'text-center text-text-light dark:text-text-dark text-sm'; 