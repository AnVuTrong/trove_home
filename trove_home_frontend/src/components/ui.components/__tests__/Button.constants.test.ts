import {
  BUTTON_VARIANT_CLASSES,
  BUTTON_SIZE_CLASSES,
  BUTTON_BASE_CLASSES,
  BUTTON_DISABLED_CLASSES
} from '../button.components/Button.constants';

describe('Button Constants', () => {
  describe('BUTTON_VARIANT_CLASSES', () => {
    it('contains all required variant types', () => {
      const expectedVariants = ['primary', 'secondary', 'danger', 'success', 'outline'];
      const actualVariants = Object.keys(BUTTON_VARIANT_CLASSES);
      
      expectedVariants.forEach(variant => {
        expect(actualVariants).toContain(variant);
      });
    });

    it('has non-empty class values for each variant', () => {
      Object.values(BUTTON_VARIANT_CLASSES).forEach(classValue => {
        expect(classValue).toBeTruthy();
        expect(typeof classValue).toBe('string');
      });
    });
  });

  describe('BUTTON_SIZE_CLASSES', () => {
    it('contains all required size types', () => {
      const expectedSizes = ['sm', 'md', 'lg', 'xl'];
      const actualSizes = Object.keys(BUTTON_SIZE_CLASSES);
      
      expectedSizes.forEach(size => {
        expect(actualSizes).toContain(size);
      });
    });

    it('has non-empty class values for each size', () => {
      Object.values(BUTTON_SIZE_CLASSES).forEach(classValue => {
        expect(classValue).toBeTruthy();
        expect(typeof classValue).toBe('string');
      });
    });
  });

  describe('BUTTON_BASE_CLASSES', () => {
    it('is a non-empty string', () => {
      expect(BUTTON_BASE_CLASSES).toBeTruthy();
      expect(typeof BUTTON_BASE_CLASSES).toBe('string');
    });
  });

  describe('BUTTON_DISABLED_CLASSES', () => {
    it('is a non-empty string', () => {
      expect(BUTTON_DISABLED_CLASSES).toBeTruthy();
      expect(typeof BUTTON_DISABLED_CLASSES).toBe('string');
    });
  });
}); 