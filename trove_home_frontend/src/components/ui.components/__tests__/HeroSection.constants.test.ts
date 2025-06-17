import {
  HERO_SECTION_BASE_CLASSES,
  HERO_SECTION_CONTAINER_CLASSES,
  HERO_SECTION_IMAGE_CLASSES,
  HERO_SECTION_TEXT_CONTAINER_CLASSES,
  HERO_SECTION_HEADER_CLASSES,
  HERO_SECTION_SUBHEADER_CLASSES,
  HERO_SECTION_PARAGRAPH_CLASSES
} from '../hero.components/HeroSection.constants';

describe('HeroSection Constants', () => {
  describe('HERO_SECTION_BASE_CLASSES', () => {
    it('should be defined and contain expected layout classes', () => {
      expect(HERO_SECTION_BASE_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_BASE_CLASSES).toBe('string');
      expect(HERO_SECTION_BASE_CLASSES).toContain('flex');
      expect(HERO_SECTION_BASE_CLASSES).toContain('items-center');
    });
  });

  describe('HERO_SECTION_CONTAINER_CLASSES', () => {
    it('should be defined and contain expected container classes', () => {
      expect(HERO_SECTION_CONTAINER_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_CONTAINER_CLASSES).toBe('string');
      expect(HERO_SECTION_CONTAINER_CLASSES).toContain('w-full');
      expect(HERO_SECTION_CONTAINER_CLASSES).toContain('mx-auto');
    });
  });

  describe('HERO_SECTION_IMAGE_CLASSES', () => {
    it('should be defined and contain expected image classes', () => {
      expect(HERO_SECTION_IMAGE_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_IMAGE_CLASSES).toBe('string');
      expect(HERO_SECTION_IMAGE_CLASSES).toContain('w-full');
      expect(HERO_SECTION_IMAGE_CLASSES).toContain('rounded-lg');
      expect(HERO_SECTION_IMAGE_CLASSES).toContain('object-cover');
    });
  });

  describe('HERO_SECTION_TEXT_CONTAINER_CLASSES', () => {
    it('should be defined and contain expected text container classes', () => {
      expect(HERO_SECTION_TEXT_CONTAINER_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_TEXT_CONTAINER_CLASSES).toBe('string');
      expect(HERO_SECTION_TEXT_CONTAINER_CLASSES).toContain('w-full');
      expect(HERO_SECTION_TEXT_CONTAINER_CLASSES).toContain('space-y');
    });
  });

  describe('HERO_SECTION_HEADER_CLASSES', () => {
    it('should be defined and contain expected header classes', () => {
      expect(HERO_SECTION_HEADER_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_HEADER_CLASSES).toBe('string');
      expect(HERO_SECTION_HEADER_CLASSES).toContain('text-');
      expect(HERO_SECTION_HEADER_CLASSES).toContain('font-bold');
    });
  });

  describe('HERO_SECTION_SUBHEADER_CLASSES', () => {
    it('should be defined and contain expected subheader classes', () => {
      expect(HERO_SECTION_SUBHEADER_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_SUBHEADER_CLASSES).toBe('string');
      expect(HERO_SECTION_SUBHEADER_CLASSES).toContain('text-');
    });
  });

  describe('HERO_SECTION_PARAGRAPH_CLASSES', () => {
    it('should be defined and contain expected paragraph classes', () => {
      expect(HERO_SECTION_PARAGRAPH_CLASSES).toBeDefined();
      expect(typeof HERO_SECTION_PARAGRAPH_CLASSES).toBe('string');
      expect(HERO_SECTION_PARAGRAPH_CLASSES).toContain('text-');
      expect(HERO_SECTION_PARAGRAPH_CLASSES).toContain('leading-');
    });
  });

  describe('All constants should be strings', () => {
    it('should ensure all constants are valid CSS class strings', () => {
      const constants = [
        HERO_SECTION_BASE_CLASSES,
        HERO_SECTION_CONTAINER_CLASSES,
        HERO_SECTION_IMAGE_CLASSES,
        HERO_SECTION_TEXT_CONTAINER_CLASSES,
        HERO_SECTION_HEADER_CLASSES,
        HERO_SECTION_SUBHEADER_CLASSES,
        HERO_SECTION_PARAGRAPH_CLASSES
      ];

      constants.forEach(constant => {
        expect(typeof constant).toBe('string');
        expect(constant.length).toBeGreaterThan(0);
        expect(constant.trim()).toBe(constant); // No leading/trailing whitespace
      });
    });
  });
}); 