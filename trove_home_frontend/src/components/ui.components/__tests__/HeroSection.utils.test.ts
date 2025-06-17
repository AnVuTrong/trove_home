import { HeroSectionStyleUtils } from '../hero.components/HeroSection.utils';
import {
  HERO_SECTION_BASE_CLASSES,
  HERO_SECTION_CONTAINER_CLASSES,
  HERO_SECTION_IMAGE_CLASSES,
  HERO_SECTION_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_HEADER_CLASSES,
  HERO_SECTION_SUBHEADER_CLASSES,
  HERO_SECTION_PARAGRAPH_CLASSES
} from '../hero.components/HeroSection.constants';

describe('HeroSectionStyleUtils', () => {
  describe('getContainerClasses', () => {
    it('returns default container classes when no custom className provided', () => {
      const result = HeroSectionStyleUtils.getContainerClasses();
      expect(result).toBe(HERO_SECTION_CONTAINER_CLASSES);
    });

    it('combines default and custom classes when className provided', () => {
      const customClass = 'custom-container';
      const result = HeroSectionStyleUtils.getContainerClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_CONTAINER_CLASSES} ${customClass}`);
    });
  });

  describe('getBaseClasses', () => {
    it('returns base classes', () => {
      const result = HeroSectionStyleUtils.getBaseClasses();
      expect(result).toBe(HERO_SECTION_BASE_CLASSES);
    });
  });

  describe('getImageClasses', () => {
    it('returns default image classes when no custom className provided', () => {
      const result = HeroSectionStyleUtils.getImageClasses();
      expect(result).toBe(HERO_SECTION_IMAGE_CLASSES);
    });

    it('combines default and custom classes when imageClassName provided', () => {
      const customClass = 'custom-image';
      const result = HeroSectionStyleUtils.getImageClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_IMAGE_CLASSES} ${customClass}`);
    });
  });

  describe('getTextContainerClasses', () => {
    it('returns default text container classes when no custom className provided', () => {
      const result = HeroSectionStyleUtils.getTextContainerClasses();
      expect(result).toBe(HERO_SECTION_TEXT_CONTAINER_CLASSES);
    });

    it('combines default and custom classes when textClassName provided', () => {
      const customClass = 'custom-text';
      const result = HeroSectionStyleUtils.getTextContainerClasses(customClass);
      expect(result).toBe(`${HERO_SECTION_TEXT_CONTAINER_CLASSES} ${customClass}`);
    });
  });

  describe('getHeaderClasses', () => {
    it('returns header classes', () => {
      const result = HeroSectionStyleUtils.getHeaderClasses();
      expect(result).toBe(HERO_SECTION_HEADER_CLASSES);
    });
  });

  describe('getSubheaderClasses', () => {
    it('returns subheader classes', () => {
      const result = HeroSectionStyleUtils.getSubheaderClasses();
      expect(result).toBe(HERO_SECTION_SUBHEADER_CLASSES);
    });
  });

  describe('getParagraphClasses', () => {
    it('returns paragraph classes', () => {
      const result = HeroSectionStyleUtils.getParagraphClasses();
      expect(result).toBe(HERO_SECTION_PARAGRAPH_CLASSES);
    });
  });
}); 