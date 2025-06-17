import {
  HERO_SECTION_RESPONSIVE_CONTAINER_CLASSES,
  HERO_SECTION_RESPONSIVE_CONTENT_CLASSES,
  HERO_SECTION_MOBILE_FULLSCREEN_IMAGE_CLASSES,
  HERO_SECTION_DESKTOP_IMAGE_CLASSES,
  HERO_SECTION_RESPONSIVE_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_RESPONSIVE_HEADER_CLASSES,
  HERO_SECTION_RESPONSIVE_SUBHEADER_CLASSES,
  HERO_SECTION_RESPONSIVE_PARAGRAPH_CLASSES
} from './HeroSection.constants';

export class HeroSectionStyleUtils {
  /**
   * Get responsive container classes (mobile fullscreen, desktop constrained)
   */
  static getResponsiveContainerClasses(className?: string): string {
    return className 
      ? `${HERO_SECTION_RESPONSIVE_CONTAINER_CLASSES} ${className}` 
      : HERO_SECTION_RESPONSIVE_CONTAINER_CLASSES;
  }

  /**
   * Get responsive content wrapper classes
   */
  static getResponsiveContentClasses(): string {
    return HERO_SECTION_RESPONSIVE_CONTENT_CLASSES;
  }

  /**
   * Get mobile fullscreen image classes
   */
  static getMobileFullscreenImageClasses(imageClassName?: string): string {
    return imageClassName 
      ? `${HERO_SECTION_MOBILE_FULLSCREEN_IMAGE_CLASSES} ${imageClassName}` 
      : HERO_SECTION_MOBILE_FULLSCREEN_IMAGE_CLASSES;
  }

  /**
   * Get desktop image classes (left 50%)
   */
  static getDesktopImageClasses(imageClassName?: string): string {
    return imageClassName 
      ? `${HERO_SECTION_DESKTOP_IMAGE_CLASSES} ${imageClassName}` 
      : HERO_SECTION_DESKTOP_IMAGE_CLASSES;
  }

  /**
   * Get responsive text container classes
   */
  static getResponsiveTextContainerClasses(textClassName?: string): string {
    return textClassName 
      ? `${HERO_SECTION_RESPONSIVE_TEXT_CONTAINER_CLASSES} ${textClassName}` 
      : HERO_SECTION_RESPONSIVE_TEXT_CONTAINER_CLASSES;
  }

  /**
   * Get responsive header classes with theme support
   */
  static getResponsiveHeaderClasses(): string {
    return HERO_SECTION_RESPONSIVE_HEADER_CLASSES;
  }

  /**
   * Get responsive subheader classes with theme support
   */
  static getResponsiveSubheaderClasses(): string {
    return HERO_SECTION_RESPONSIVE_SUBHEADER_CLASSES;
  }

  /**
   * Get responsive paragraph classes with theme support
   */
  static getResponsiveParagraphClasses(): string {
    return HERO_SECTION_RESPONSIVE_PARAGRAPH_CLASSES;
  }
} 