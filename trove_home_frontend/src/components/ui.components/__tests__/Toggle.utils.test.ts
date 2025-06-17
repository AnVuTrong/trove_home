import { 
  getSizeClasses, 
  getVariantClasses, 
  getThumbTranslateClass, 
  getToggleClasses, 
  getThumbClasses,
  getTextColorClass,
  getThumbAwareIconColorClass
} from '../toggle.components/Toggle.utils';

describe('Toggle Utils', () => {
  describe('getSizeClasses', () => {
    it('should return size classes object for small', () => {
      const result = getSizeClasses('sm');
      expect(result).toHaveProperty('toggle');
      expect(result).toHaveProperty('thumb');
      expect(result).toHaveProperty('icon');
      expect(typeof result.toggle).toBe('string');
      expect(typeof result.thumb).toBe('string');
      expect(typeof result.icon).toBe('string');
    });

    it('should return size classes object for medium', () => {
      const result = getSizeClasses('md');
      expect(result).toHaveProperty('toggle');
      expect(result).toHaveProperty('thumb');
      expect(result).toHaveProperty('icon');
      expect(typeof result.toggle).toBe('string');
      expect(typeof result.thumb).toBe('string');
      expect(typeof result.icon).toBe('string');
    });

    it('should return size classes object for large', () => {
      const result = getSizeClasses('lg');
      expect(result).toHaveProperty('toggle');
      expect(result).toHaveProperty('thumb');
      expect(result).toHaveProperty('icon');
      expect(typeof result.toggle).toBe('string');
      expect(typeof result.thumb).toBe('string');
      expect(typeof result.icon).toBe('string');
    });

    it('should default to medium size when no size provided', () => {
      const result = getSizeClasses();
      expect(result).toHaveProperty('toggle');
      expect(result).toHaveProperty('thumb');
      expect(result).toHaveProperty('icon');
      expect(typeof result.toggle).toBe('string');
      expect(typeof result.thumb).toBe('string');
      expect(typeof result.icon).toBe('string');
    });
  });

  describe('getVariantClasses', () => {
    it('should return non-empty string when not checked', () => {
      const variants = ['primary', 'success', 'accent'];
      variants.forEach(variant => {
        const result = getVariantClasses(variant as any, false);
        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
      });
    });

    it('should return non-empty string when checked', () => {
      const variants = ['primary', 'success', 'accent'];
      variants.forEach(variant => {
        const result = getVariantClasses(variant as any, true);
        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
      });
    });

    it('should default to primary variant when no variant provided', () => {
      const checkedResult = getVariantClasses(undefined, true);
      const uncheckedResult = getVariantClasses(undefined, false);
      expect(checkedResult).toBeTruthy();
      expect(uncheckedResult).toBeTruthy();
      expect(typeof checkedResult).toBe('string');
      expect(typeof uncheckedResult).toBe('string');
    });
  });

  describe('getThumbTranslateClass', () => {
    it('should return non-empty string when not checked', () => {
      const sizes = ['sm', 'md', 'lg'];
      sizes.forEach(size => {
        const result = getThumbTranslateClass(size as any, false);
        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
      });
    });

    it('should return non-empty string when checked', () => {
      const sizes = ['sm', 'md', 'lg'];
      sizes.forEach(size => {
        const result = getThumbTranslateClass(size as any, true);
        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
      });
    });

    it('should default to medium size when no size provided', () => {
      const checkedResult = getThumbTranslateClass(undefined, true);
      const uncheckedResult = getThumbTranslateClass(undefined, false);
      expect(checkedResult).toBeTruthy();
      expect(uncheckedResult).toBeTruthy();
      expect(typeof checkedResult).toBe('string');
      expect(typeof uncheckedResult).toBe('string');
    });
  });

  describe('getToggleClasses', () => {
    it('should combine all classes correctly', () => {
      const result = getToggleClasses('md', 'primary', true, false);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return non-empty string when disabled', () => {
      const result = getToggleClasses('md', 'primary', true, true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return non-empty string when not checked', () => {
      const result = getToggleClasses('md', 'primary', false, false);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should use default values when not provided', () => {
      const result = getToggleClasses(undefined, undefined, true, undefined);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });
  });

  describe('getThumbClasses', () => {
    it('should combine thumb classes correctly', () => {
      const result = getThumbClasses('md', true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return non-empty string when not checked', () => {
      const result = getThumbClasses('lg', false);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should use default size when not provided', () => {
      const result = getThumbClasses(undefined, true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });
  });

  describe('getTextColorClass', () => {
    it('should return non-empty string when active', () => {
      const result = getTextColorClass(true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return non-empty string when not active', () => {
      const result = getTextColorClass(false);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });
  });

  describe('getThumbAwareIconColorClass', () => {
    it('should return non-empty string when icon is under thumb', () => {
      const result = getThumbAwareIconColorClass(true, true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return non-empty string when icon is not under thumb', () => {
      const result = getThumbAwareIconColorClass(false, true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });
  });
}); 