import {
  HERO_SECTION_BASE_CLASSES,
  HERO_SECTION_CONTAINER_CLASSES,
  HERO_SECTION_IMAGE_CLASSES,
  HERO_SECTION_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_HEADER_CLASSES,
  HERO_SECTION_SUBHEADER_CLASSES,
  HERO_SECTION_PARAGRAPH_CLASSES,
  HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES,
  HERO_SECTION_FULLSCREEN_IMAGE_CLASSES,
  HERO_SECTION_FULLSCREEN_CONTENT_CLASSES,
  HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_FULLSCREEN_HEADER_CLASSES,
  HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES,
  HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES,
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
   * New responsive methods - Mobile fullscreen, Desktop 50-50 layout
   */

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
   * Get responsive header classes
   */
  static getResponsiveHeaderClasses(): string {
    return HERO_SECTION_RESPONSIVE_HEADER_CLASSES;
  }

  /**
   * Get responsive subheader classes
   */
  static getResponsiveSubheaderClasses(): string {
    return HERO_SECTION_RESPONSIVE_SUBHEADER_CLASSES;
  }

  /**
   * Get responsive paragraph classes
   */
  static getResponsiveParagraphClasses(): string {
    return HERO_SECTION_RESPONSIVE_PARAGRAPH_CLASSES;
  }

  /**
   * Legacy methods (keeping for backward compatibility)
   */

  /**
   * Get combined container classes for the hero section
   */
  static getContainerClasses(className?: string, fullScreen?: boolean): string {
    const baseClasses = fullScreen 
      ? HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES 
      : HERO_SECTION_CONTAINER_CLASSES;
    
    return className 
      ? `${baseClasses} ${className}` 
      : baseClasses;
  }

  /**
   * Get combined base classes for the hero section content
   */
  static getBaseClasses(fullScreen?: boolean): string {
    return fullScreen 
      ? HERO_SECTION_FULLSCREEN_CONTENT_CLASSES 
      : HERO_SECTION_BASE_CLASSES;
  }

  /**
   * Get combined image classes
   */
  static getImageClasses(imageClassName?: string, fullScreen?: boolean): string {
    const baseClasses = fullScreen 
      ? HERO_SECTION_FULLSCREEN_IMAGE_CLASSES 
      : HERO_SECTION_IMAGE_CLASSES;
    
    return imageClassName 
      ? `${baseClasses} ${imageClassName}` 
      : baseClasses;
  }

  /**
   * Get combined text container classes
   */
  static getTextContainerClasses(textClassName?: string, fullScreen?: boolean): string {
    const baseClasses = fullScreen 
      ? HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES 
      : HERO_SECTION_TEXT_CONTAINER_CLASSES;
    
    return textClassName 
      ? `${baseClasses} ${textClassName}` 
      : baseClasses;
  }

  /**
   * Get header classes
   */
  static getHeaderClasses(fullScreen?: boolean): string {
    return fullScreen 
      ? HERO_SECTION_FULLSCREEN_HEADER_CLASSES 
      : HERO_SECTION_HEADER_CLASSES;
  }

  /**
   * Get subheader classes
   */
  static getSubheaderClasses(fullScreen?: boolean): string {
    return fullScreen 
      ? HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES 
      : HERO_SECTION_SUBHEADER_CLASSES;
  }

  /**
   * Get paragraph classes
   */
  static getParagraphClasses(fullScreen?: boolean): string {
    return fullScreen 
      ? HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES 
      : HERO_SECTION_PARAGRAPH_CLASSES;
  }
} 