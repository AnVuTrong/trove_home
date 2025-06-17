import { HeroSectionStyleUtils } from '../hero.components/HeroSection.utils';
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
} from '../hero.components/HeroSection.constants';

describe('HeroSectionStyleUtils', () => {
  describe('getContainerClasses', () => {
    it('should return default container classes when no parameters provided', () => {
      const result = HeroSectionStyleUtils.getContainerClasses();
      expect(result).toBe(HERO_SECTION_CONTAINER_CLASSES);
    });

    it('should return container classes with custom className when provided', () => {
      const customClass = 'custom-class';
      const result = HeroSectionStyleUtils.getContainerClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_CONTAINER_CLASSES} ${customClass}`);
    });

    it('should return full-screen container classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getContainerClasses(undefined, true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES);
    });

    it('should return full-screen container classes with custom className when both provided', () => {
      const customClass = 'custom-class';
      const result = HeroSectionStyleUtils.getContainerClasses(customClass, true);
      expect(result).toBe(`${HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES} ${customClass}`);
    });

    it('should return default container classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getContainerClasses(undefined, false);
      expect(result).toBe(HERO_SECTION_CONTAINER_CLASSES);
    });
  });

  describe('getBaseClasses', () => {
    it('should return default base classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getBaseClasses();
      expect(result).toBe(HERO_SECTION_BASE_CLASSES);
    });

    it('should return full-screen content classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getBaseClasses(true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES);
    });

    it('should return default base classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getBaseClasses(false);
      expect(result).toBe(HERO_SECTION_BASE_CLASSES);
    });
  });

  describe('getImageClasses', () => {
    it('should return default image classes when no parameters provided', () => {
      const result = HeroSectionStyleUtils.getImageClasses();
      expect(result).toBe(HERO_SECTION_IMAGE_CLASSES);
    });

    it('should return image classes with custom className when provided', () => {
      const customClass = 'custom-image-class';
      const result = HeroSectionStyleUtils.getImageClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_IMAGE_CLASSES} ${customClass}`);
    });

    it('should return full-screen image classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getImageClasses(undefined, true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES);
    });

    it('should return full-screen image classes with custom className when both provided', () => {
      const customClass = 'custom-image-class';
      const result = HeroSectionStyleUtils.getImageClasses(customClass, true);
      expect(result).toBe(`${HERO_SECTION_FULLSCREEN_IMAGE_CLASSES} ${customClass}`);
    });

    it('should return default image classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getImageClasses(undefined, false);
      expect(result).toBe(HERO_SECTION_IMAGE_CLASSES);
    });
  });

  describe('getTextContainerClasses', () => {
    it('should return default text container classes when no parameters provided', () => {
      const result = HeroSectionStyleUtils.getTextContainerClasses();
      expect(result).toBe(HERO_SECTION_TEXT_CONTAINER_CLASSES);
    });

    it('should return text container classes with custom className when provided', () => {
      const customClass = 'custom-text-class';
      const result = HeroSectionStyleUtils.getTextContainerClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_TEXT_CONTAINER_CLASSES} ${customClass}`);
    });

    it('should return full-screen text container classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getTextContainerClasses(undefined, true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES);
    });

    it('should return full-screen text container classes with custom className when both provided', () => {
      const customClass = 'custom-text-class';
      const result = HeroSectionStyleUtils.getTextContainerClasses(customClass, true);
      expect(result).toBe(`${HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES} ${customClass}`);
    });

    it('should return default text container classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getTextContainerClasses(undefined, false);
      expect(result).toBe(HERO_SECTION_TEXT_CONTAINER_CLASSES);
    });
  });

  describe('getHeaderClasses', () => {
    it('should return default header classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getHeaderClasses();
      expect(result).toBe(HERO_SECTION_HEADER_CLASSES);
    });

    it('should return full-screen header classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getHeaderClasses(true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_HEADER_CLASSES);
    });

    it('should return default header classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getHeaderClasses(false);
      expect(result).toBe(HERO_SECTION_HEADER_CLASSES);
    });
  });

  describe('getSubheaderClasses', () => {
    it('should return default subheader classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getSubheaderClasses();
      expect(result).toBe(HERO_SECTION_SUBHEADER_CLASSES);
    });

    it('should return full-screen subheader classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getSubheaderClasses(true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES);
    });

    it('should return default subheader classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getSubheaderClasses(false);
      expect(result).toBe(HERO_SECTION_SUBHEADER_CLASSES);
    });
  });

  describe('getParagraphClasses', () => {
    it('should return default paragraph classes when no parameter provided', () => {
      const result = HeroSectionStyleUtils.getParagraphClasses();
      expect(result).toBe(HERO_SECTION_PARAGRAPH_CLASSES);
    });

    it('should return full-screen paragraph classes when fullScreen is true', () => {
      const result = HeroSectionStyleUtils.getParagraphClasses(true);
      expect(result).toBe(HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES);
    });

    it('should return default paragraph classes when fullScreen is false', () => {
      const result = HeroSectionStyleUtils.getParagraphClasses(false);
      expect(result).toBe(HERO_SECTION_PARAGRAPH_CLASSES);
    });
  });
}); 