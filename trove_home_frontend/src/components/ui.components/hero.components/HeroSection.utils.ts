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
  HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES
} from './HeroSection.constants';

export class HeroSectionStyleUtils {
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