import { ButtonStyleUtils } from '../button.components/Button.utils';

describe('ButtonStyleUtils', () => {
  describe('getVariantClasses', () => {
    it('returns non-empty string by default', () => {
      const classes = ButtonStyleUtils.getVariantClasses();
      expect(classes).toBeTruthy();
      expect(typeof classes).toBe('string');
    });

    it('returns non-empty string for different variants', () => {
      const variants = ['danger', 'success', 'outline'];
      variants.forEach(variant => {
        const classes = ButtonStyleUtils.getVariantClasses(variant as any);
        expect(classes).toBeTruthy();
        expect(typeof classes).toBe('string');
      });
    });
  });

  describe('getSizeClasses', () => {
    it('returns non-empty string by default', () => {
      const classes = ButtonStyleUtils.getSizeClasses();
      expect(classes).toBeTruthy();
      expect(typeof classes).toBe('string');
    });

    it('returns non-empty string for different sizes', () => {
      const sizes = ['sm', 'lg', 'xl'];
      sizes.forEach(size => {
        const classes = ButtonStyleUtils.getSizeClasses(size as any);
        expect(classes).toBeTruthy();
        expect(typeof classes).toBe('string');
      });
    });
  });

  describe('getDisabledClasses', () => {
    it('returns non-empty string when disabled is true', () => {
      const classes = ButtonStyleUtils.getDisabledClasses(true);
      expect(classes).toBeTruthy();
      expect(typeof classes).toBe('string');
    });

    it('returns empty string when disabled is false', () => {
      const classes = ButtonStyleUtils.getDisabledClasses(false);
      expect(classes).toBe('');
    });
  });

  describe('getCombinedClasses', () => {
    it('combines all classes correctly with defaults', () => {
      const classes = ButtonStyleUtils.getCombinedClasses();
      expect(classes).toBeTruthy();
      expect(typeof classes).toBe('string');
    });

    it('combines all classes correctly with custom values', () => {
      const classes = ButtonStyleUtils.getCombinedClasses('danger', 'lg', true, 'custom-class');
      expect(classes).toBeTruthy();
      expect(typeof classes).toBe('string');
      expect(classes).toContain('custom-class');
    });

    it('trims whitespace correctly', () => {
      const classes = ButtonStyleUtils.getCombinedClasses('primary', 'md', false, '');
      expect(classes).not.toMatch(/^\s+|\s+$/);
      expect(classes).not.toMatch(/\s{2,}/);
    });
  });
}); 