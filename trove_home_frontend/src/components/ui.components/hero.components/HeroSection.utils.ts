import {
  HERO_SECTION_BASE_CLASSES,
  HERO_SECTION_CONTAINER_CLASSES,
  HERO_SECTION_IMAGE_CLASSES,
  HERO_SECTION_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_HEADER_CLASSES,
  HERO_SECTION_SUBHEADER_CLASSES,
  HERO_SECTION_PARAGRAPH_CLASSES
} from './HeroSection.constants';

export class HeroSectionStyleUtils {
  /**
   * Get combined container classes for the hero section
   */
  static getContainerClasses(className?: string): string {
    return className 
      ? `${HERO_SECTION_CONTAINER_CLASSES} ${className}` 
      : HERO_SECTION_CONTAINER_CLASSES;
  }

  /**
   * Get combined base classes for the hero section content
   */
  static getBaseClasses(): string {
    return HERO_SECTION_BASE_CLASSES;
  }

  /**
   * Get combined image classes
   */
  static getImageClasses(imageClassName?: string): string {
    return imageClassName 
      ? `${HERO_SECTION_IMAGE_CLASSES} ${imageClassName}` 
      : HERO_SECTION_IMAGE_CLASSES;
  }

  /**
   * Get combined text container classes
   */
  static getTextContainerClasses(textClassName?: string): string {
    return textClassName 
      ? `${HERO_SECTION_TEXT_CONTAINER_CLASSES} ${textClassName}` 
      : HERO_SECTION_TEXT_CONTAINER_CLASSES;
  }

  /**
   * Get header classes
   */
  static getHeaderClasses(): string {
    return HERO_SECTION_HEADER_CLASSES;
  }

  /**
   * Get subheader classes
   */
  static getSubheaderClasses(): string {
    return HERO_SECTION_SUBHEADER_CLASSES;
  }

  /**
   * Get paragraph classes
   */
  static getParagraphClasses(): string {
    return HERO_SECTION_PARAGRAPH_CLASSES;
  }
} 