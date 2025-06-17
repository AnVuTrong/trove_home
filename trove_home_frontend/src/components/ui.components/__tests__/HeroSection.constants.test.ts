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

describe('HeroSection Constants', () => {
  describe('Default Mode Constants', () => {
    describe('HERO_SECTION_BASE_CLASSES', () => {
      it('should be defined and contain expected layout classes', () => {
        expect(HERO_SECTION_BASE_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_BASE_CLASSES).toBe('string');
        expect(HERO_SECTION_BASE_CLASSES).toContain('flex');
        expect(HERO_SECTION_BASE_CLASSES).toContain('items-stretch');
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
        expect(HERO_SECTION_HEADER_CLASSES).toContain('text-3xl');
        expect(HERO_SECTION_HEADER_CLASSES).toContain('font-bold');
      });
    });

    describe('HERO_SECTION_SUBHEADER_CLASSES', () => {
      it('should be defined and contain expected subheader classes', () => {
        expect(HERO_SECTION_SUBHEADER_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_SUBHEADER_CLASSES).toBe('string');
        expect(HERO_SECTION_SUBHEADER_CLASSES).toContain('text-lg');
      });
    });

    describe('HERO_SECTION_PARAGRAPH_CLASSES', () => {
      it('should be defined and contain expected paragraph classes', () => {
        expect(HERO_SECTION_PARAGRAPH_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_PARAGRAPH_CLASSES).toBe('string');
        expect(HERO_SECTION_PARAGRAPH_CLASSES).toContain('text-base');
      });
    });
  });

  describe('Full-Screen Mode Constants', () => {
    describe('HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES', () => {
      it('should be defined and contain expected full-screen container classes', () => {
        expect(HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES).toContain('relative');
        expect(HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES).toContain('w-full');
        expect(HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES).toContain('h-screen');
        expect(HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES).toContain('overflow-hidden');
      });
    });

    describe('HERO_SECTION_FULLSCREEN_IMAGE_CLASSES', () => {
      it('should be defined and contain expected full-screen image classes', () => {
        expect(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toContain('absolute');
        expect(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toContain('inset-0');
        expect(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toContain('w-full');
        expect(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toContain('h-full');
        expect(HERO_SECTION_FULLSCREEN_IMAGE_CLASSES).toContain('object-cover');
      });
    });

    describe('HERO_SECTION_FULLSCREEN_CONTENT_CLASSES', () => {
      it('should be defined and contain expected full-screen content classes', () => {
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('relative');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('z-10');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('flex');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('items-center');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('justify-center');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('h-full');
        expect(HERO_SECTION_FULLSCREEN_CONTENT_CLASSES).toContain('bg-black/30');
      });
    });

    describe('HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES', () => {
      it('should be defined and contain expected full-screen text container classes', () => {
        expect(HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES).toContain('text-center');
        expect(HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES).toContain('max-w-4xl');
        expect(HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES).toContain('mx-auto');
        expect(HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES).toContain('space-y-6');
      });
    });

    describe('HERO_SECTION_FULLSCREEN_HEADER_CLASSES', () => {
      it('should be defined and contain expected full-screen header classes', () => {
        expect(HERO_SECTION_FULLSCREEN_HEADER_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_HEADER_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_HEADER_CLASSES).toContain('text-4xl');
        expect(HERO_SECTION_FULLSCREEN_HEADER_CLASSES).toContain('font-bold');
        expect(HERO_SECTION_FULLSCREEN_HEADER_CLASSES).toContain('text-white');
        expect(HERO_SECTION_FULLSCREEN_HEADER_CLASSES).toContain('drop-shadow-2xl');
      });
    });

    describe('HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES', () => {
      it('should be defined and contain expected full-screen subheader classes', () => {
        expect(HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES).toContain('text-xl');
        expect(HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES).toContain('text-white/90');
        expect(HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES).toContain('font-medium');
        expect(HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES).toContain('drop-shadow-lg');
      });
    });

    describe('HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES', () => {
      it('should be defined and contain expected full-screen paragraph classes', () => {
        expect(HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES).toBeDefined();
        expect(typeof HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES).toBe('string');
        expect(HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES).toContain('text-lg');
        expect(HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES).toContain('text-white/80');
        expect(HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES).toContain('drop-shadow-lg');
      });
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
        HERO_SECTION_PARAGRAPH_CLASSES,
        HERO_SECTION_FULLSCREEN_CONTAINER_CLASSES,
        HERO_SECTION_FULLSCREEN_IMAGE_CLASSES,
        HERO_SECTION_FULLSCREEN_CONTENT_CLASSES,
        HERO_SECTION_FULLSCREEN_TEXT_CONTAINER_CLASSES,
        HERO_SECTION_FULLSCREEN_HEADER_CLASSES,
        HERO_SECTION_FULLSCREEN_SUBHEADER_CLASSES,
        HERO_SECTION_FULLSCREEN_PARAGRAPH_CLASSES
      ];

      constants.forEach(constant => {
        expect(typeof constant).toBe('string');
        expect(constant.length).toBeGreaterThan(0);
        expect(constant.trim()).toBe(constant); // No leading/trailing whitespace
      });
    });
  });
}); 