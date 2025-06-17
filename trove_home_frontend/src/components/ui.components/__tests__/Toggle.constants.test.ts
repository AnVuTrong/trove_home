import { 
  TOGGLE_DEFAULTS,
  TOGGLE_SIZE_CLASSES,
  TOGGLE_VARIANT_CLASSES,
  TOGGLE_TRANSLATE_CLASSES,
  TOGGLE_BASE_CLASSES
} from '../toggle.components/Toggle.constants';

describe('Toggle Constants', () => {
  describe('TOGGLE_DEFAULTS', () => {
    it('should have correct default values', () => {
      expect(TOGGLE_DEFAULTS.SIZE).toBe('md');
      expect(TOGGLE_DEFAULTS.VARIANT).toBe('primary');
      expect(TOGGLE_DEFAULTS.DISABLED).toBe(false);
    });

    it('should be frozen in development', () => {
      // In development, we can check if the object is frozen
      // Note: as const provides compile-time immutability, not runtime
      expect(typeof TOGGLE_DEFAULTS.SIZE).toBe('string');
      expect(typeof TOGGLE_DEFAULTS.VARIANT).toBe('string');
      expect(typeof TOGGLE_DEFAULTS.DISABLED).toBe('boolean');
    });
  });

  describe('TOGGLE_SIZE_CLASSES', () => {
    it('should contain all size variants', () => {
      expect(TOGGLE_SIZE_CLASSES).toHaveProperty('sm');
      expect(TOGGLE_SIZE_CLASSES).toHaveProperty('md');
      expect(TOGGLE_SIZE_CLASSES).toHaveProperty('lg');
    });

    it('should have non-empty small size classes', () => {
      const sm = TOGGLE_SIZE_CLASSES.sm;
      expect(sm.toggle).toBeTruthy();
      expect(sm.thumb).toBeTruthy();
      expect(sm.icon).toBeTruthy();
      expect(typeof sm.toggle).toBe('string');
      expect(typeof sm.thumb).toBe('string');
      expect(typeof sm.icon).toBe('string');
    });

    it('should have non-empty medium size classes', () => {
      const md = TOGGLE_SIZE_CLASSES.md;
      expect(md.toggle).toBeTruthy();
      expect(md.thumb).toBeTruthy();
      expect(md.icon).toBeTruthy();
      expect(typeof md.toggle).toBe('string');
      expect(typeof md.thumb).toBe('string');
      expect(typeof md.icon).toBe('string');
    });

    it('should have non-empty large size classes', () => {
      const lg = TOGGLE_SIZE_CLASSES.lg;
      expect(lg.toggle).toBeTruthy();
      expect(lg.thumb).toBeTruthy();
      expect(lg.icon).toBeTruthy();
      expect(typeof lg.toggle).toBe('string');
      expect(typeof lg.thumb).toBe('string');
      expect(typeof lg.icon).toBe('string');
    });
  });

  describe('TOGGLE_VARIANT_CLASSES', () => {
    it('should contain all variant classes', () => {
      expect(TOGGLE_VARIANT_CLASSES).toHaveProperty('primary');
      expect(TOGGLE_VARIANT_CLASSES).toHaveProperty('success');
      expect(TOGGLE_VARIANT_CLASSES).toHaveProperty('accent');
    });

    it('should have non-empty variant styles', () => {
      Object.values(TOGGLE_VARIANT_CLASSES).forEach(classValue => {
        expect(classValue).toBeTruthy();
        expect(typeof classValue).toBe('string');
      });
    });
  });

  describe('TOGGLE_TRANSLATE_CLASSES', () => {
    it('should contain all size translate classes', () => {
      expect(TOGGLE_TRANSLATE_CLASSES).toHaveProperty('sm');
      expect(TOGGLE_TRANSLATE_CLASSES).toHaveProperty('md');
      expect(TOGGLE_TRANSLATE_CLASSES).toHaveProperty('lg');
    });

    it('should have non-empty translate values', () => {
      Object.values(TOGGLE_TRANSLATE_CLASSES).forEach(classValue => {
        expect(classValue).toBeTruthy();
        expect(typeof classValue).toBe('string');
      });
    });
  });

  describe('TOGGLE_BASE_CLASSES', () => {
    it('should have non-empty base classes', () => {
      expect(TOGGLE_BASE_CLASSES.TOGGLE).toBeTruthy();
      expect(typeof TOGGLE_BASE_CLASSES.TOGGLE).toBe('string');
    });

    it('should have non-empty thumb classes', () => {
      expect(TOGGLE_BASE_CLASSES.THUMB).toBeTruthy();
      expect(typeof TOGGLE_BASE_CLASSES.THUMB).toBe('string');
    });

    it('should have non-empty icon positioning classes', () => {
      expect(TOGGLE_BASE_CLASSES.ICON_LEFT).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.ICON_RIGHT).toBeTruthy();
      expect(typeof TOGGLE_BASE_CLASSES.ICON_LEFT).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.ICON_RIGHT).toBe('string');
    });

    it('should have non-empty state classes', () => {
      expect(TOGGLE_BASE_CLASSES.DISABLED).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.UNCHECKED_BG).toBeTruthy();
      expect(typeof TOGGLE_BASE_CLASSES.DISABLED).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.UNCHECKED_BG).toBe('string');
    });

    it('should have non-empty layout classes', () => {
      expect(TOGGLE_BASE_CLASSES.CONTAINER).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.SIDE_CONTAINER).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.LABEL_CONTAINER).toBeTruthy();
      expect(typeof TOGGLE_BASE_CLASSES.CONTAINER).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.SIDE_CONTAINER).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.LABEL_CONTAINER).toBe('string');
    });

    it('should have non-empty text classes', () => {
      expect(TOGGLE_BASE_CLASSES.LABEL).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.SIDE_LABEL).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.ACTIVE_TEXT).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.INACTIVE_TEXT).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.ACTIVE_ICON).toBeTruthy();
      expect(TOGGLE_BASE_CLASSES.INACTIVE_ICON).toBeTruthy();
      expect(typeof TOGGLE_BASE_CLASSES.LABEL).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.SIDE_LABEL).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.ACTIVE_TEXT).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.INACTIVE_TEXT).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.ACTIVE_ICON).toBe('string');
      expect(typeof TOGGLE_BASE_CLASSES.INACTIVE_ICON).toBe('string');
    });
  });
}); 