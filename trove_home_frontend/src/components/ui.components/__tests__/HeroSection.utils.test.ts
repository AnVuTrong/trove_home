import { HeroSectionStyleUtils } from '../hero.components/HeroSection.utils';
import {
  HERO_SECTION_RESPONSIVE_CONTAINER_CLASSES,
  HERO_SECTION_RESPONSIVE_CONTENT_CLASSES,
  HERO_SECTION_MOBILE_FULLSCREEN_IMAGE_CLASSES,
  HERO_SECTION_DESKTOP_IMAGE_CLASSES,
  HERO_SECTION_RESPONSIVE_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_RESPONSIVE_HEADER_CLASSES,
  HERO_SECTION_RESPONSIVE_SUBHEADER_CLASSES,
  HERO_SECTION_RESPONSIVE_PARAGRAPH_CLASSES
} from '../hero.components/HeroSection.constants';

describe('HeroSectionStyleUtils', () => {
  describe('getResponsiveContainerClasses', () => {
    it('should return default responsive container classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getResponsiveContainerClasses();
      expect(result).toBe(HERO_SECTION_RESPONSIVE_CONTAINER_CLASSES);
    });

    it('should return responsive container classes with custom className when provided', () => {
      const customClass = 'custom-class';
      const result = HeroSectionStyleUtils.getResponsiveContainerClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_RESPONSIVE_CONTAINER_CLASSES} ${customClass}`);
    });
  });

  describe('getResponsiveContentClasses', () => {
    it('should return responsive content classes', () => {
      const result = HeroSectionStyleUtils.getResponsiveContentClasses();
      expect(result).toBe(HERO_SECTION_RESPONSIVE_CONTENT_CLASSES);
    });
  });

  describe('getMobileFullscreenImageClasses', () => {
    it('should return default mobile fullscreen image classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getMobileFullscreenImageClasses();
      expect(result).toBe(HERO_SECTION_MOBILE_FULLSCREEN_IMAGE_CLASSES);
    });

    it('should return mobile fullscreen image classes with custom className when provided', () => {
      const customClass = 'custom-image-class';
      const result = HeroSectionStyleUtils.getMobileFullscreenImageClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_MOBILE_FULLSCREEN_IMAGE_CLASSES} ${customClass}`);
    });
  });

  describe('getDesktopImageClasses', () => {
    it('should return default desktop image classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getDesktopImageClasses();
      expect(result).toBe(HERO_SECTION_DESKTOP_IMAGE_CLASSES);
    });

    it('should return desktop image classes with custom className when provided', () => {
      const customClass = 'custom-image-class';
      const result = HeroSectionStyleUtils.getDesktopImageClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_DESKTOP_IMAGE_CLASSES} ${customClass}`);
    });
  });

  describe('getResponsiveTextContainerClasses', () => {
    it('should return default responsive text container classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getResponsiveTextContainerClasses();
      expect(result).toBe(HERO_SECTION_RESPONSIVE_TEXT_CONTAINER_CLASSES);
    });

    it('should return responsive text container classes with custom className when provided', () => {
      const customClass = 'custom-text-class';
      const result = HeroSectionStyleUtils.getResponsiveTextContainerClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_RESPONSIVE_TEXT_CONTAINER_CLASSES} ${customClass}`);
    });
  });

  describe('getResponsiveHeaderClasses', () => {
    it('should return responsive header classes with theme support', () => {
      const result = HeroSectionStyleUtils.getResponsiveHeaderClasses();
      expect(result).toBe(HERO_SECTION_RESPONSIVE_HEADER_CLASSES);
      expect(result).toContain('text-text-light_h1');
      expect(result).toContain('dark:text-text-dark_h1');
      expect(result).toContain('transition-colors');
    });
  });

  describe('getResponsiveSubheaderClasses', () => {
    it('should return responsive subheader classes with theme support', () => {
      const result = HeroSectionStyleUtils.getResponsiveSubheaderClasses();
      expect(result).toBe(HERO_SECTION_RESPONSIVE_SUBHEADER_CLASSES);
      expect(result).toContain('text-text-light');
      expect(result).toContain('dark:text-text-dark');
      expect(result).toContain('transition-colors');
    });
  });

  describe('getResponsiveParagraphClasses', () => {
    it('should return responsive paragraph classes with theme support', () => {
      const result = HeroSectionStyleUtils.getResponsiveParagraphClasses();
      expect(result).toBe(HERO_SECTION_RESPONSIVE_PARAGRAPH_CLASSES);
      expect(result).toContain('text-text-light');
      expect(result).toContain('dark:text-text-dark');
      expect(result).toContain('transition-colors');
    });
  });

  describe('Theme Support Validation', () => {
    it('should ensure all text methods return theme-responsive classes', () => {
      const headerClasses = HeroSectionStyleUtils.getResponsiveHeaderClasses();
      const subheaderClasses = HeroSectionStyleUtils.getResponsiveSubheaderClasses();
      const paragraphClasses = HeroSectionStyleUtils.getResponsiveParagraphClasses();

      [headerClasses, subheaderClasses, paragraphClasses].forEach(classes => {
        expect(classes).toContain('dark:');
        expect(classes).toContain('transition-colors');
      });
    });

    it('should use correct theme color hierarchy', () => {
      const headerClasses = HeroSectionStyleUtils.getResponsiveHeaderClasses();
      const subheaderClasses = HeroSectionStyleUtils.getResponsiveSubheaderClasses();
      const paragraphClasses = HeroSectionStyleUtils.getResponsiveParagraphClasses();

      // Headers use heading colors
      expect(headerClasses).toContain('text-text-light_h1');
      expect(headerClasses).toContain('dark:text-text-dark_h1');

      // Subheaders and paragraphs use regular text colors
      expect(subheaderClasses).toContain('text-text-light');
      expect(subheaderClasses).toContain('dark:text-text-dark');
      expect(paragraphClasses).toContain('text-text-light');
      expect(paragraphClasses).toContain('dark:text-text-dark');
    });
  });
}); 