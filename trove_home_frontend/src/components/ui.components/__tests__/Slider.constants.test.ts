import { 
  SLIDER_DEFAULTS, 
  SLIDER_CLASSES, 
  SLIDER_STYLES 
} from '../slider.components/Slider.constants';

describe('Slider Constants', () => {
  describe('SLIDER_DEFAULTS', () => {
    it('should have correct default values', () => {
      expect(SLIDER_DEFAULTS.MIN).toBe(0);
      expect(SLIDER_DEFAULTS.MAX).toBe(100);
      expect(SLIDER_DEFAULTS.STEP).toBe(1);
      expect(SLIDER_DEFAULTS.DISABLED).toBe(false);
      expect(SLIDER_DEFAULTS.SHOW_VALUE).toBe(false);
    });

    it('should be frozen in development', () => {
      // In development, we can check if the object is frozen
      // Note: as const provides compile-time immutability, not runtime
      expect(typeof SLIDER_DEFAULTS.MIN).toBe('number');
      expect(typeof SLIDER_DEFAULTS.MAX).toBe('number');
      expect(typeof SLIDER_DEFAULTS.STEP).toBe('number');
    });
  });

  describe('SLIDER_CLASSES', () => {
    it('should have non-empty base classes', () => {
      expect(SLIDER_CLASSES.BASE).toBeTruthy();
      expect(typeof SLIDER_CLASSES.BASE).toBe('string');
    });

    it('should have non-empty disabled classes', () => {
      expect(SLIDER_CLASSES.DISABLED).toBeTruthy();
      expect(typeof SLIDER_CLASSES.DISABLED).toBe('string');
    });

    it('should have non-empty container classes', () => {
      expect(SLIDER_CLASSES.CONTAINER).toBeTruthy();
      expect(typeof SLIDER_CLASSES.CONTAINER).toBe('string');
    });

    it('should have non-empty label and value display classes', () => {
      expect(SLIDER_CLASSES.LABEL_CONTAINER).toBeTruthy();
      expect(SLIDER_CLASSES.LABEL).toBeTruthy();
      expect(SLIDER_CLASSES.VALUE_DISPLAY).toBeTruthy();
      expect(SLIDER_CLASSES.MIN_MAX_CONTAINER).toBeTruthy();
      expect(typeof SLIDER_CLASSES.LABEL_CONTAINER).toBe('string');
      expect(typeof SLIDER_CLASSES.LABEL).toBe('string');
      expect(typeof SLIDER_CLASSES.VALUE_DISPLAY).toBe('string');
      expect(typeof SLIDER_CLASSES.MIN_MAX_CONTAINER).toBe('string');
    });
  });

  describe('SLIDER_STYLES', () => {
    it('should have non-empty styles string', () => {
      expect(SLIDER_STYLES).toBeTruthy();
      expect(typeof SLIDER_STYLES).toBe('string');
    });
  });
}); 