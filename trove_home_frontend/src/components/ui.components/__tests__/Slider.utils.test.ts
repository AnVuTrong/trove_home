import { 
  getSliderClasses, 
  validateSliderValue, 
  formatSliderValue 
} from '../slider.components/Slider.utils';

describe('Slider Utils', () => {
  describe('getSliderClasses', () => {
    it('should return non-empty string when not disabled and no custom class', () => {
      const result = getSliderClasses(false);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return non-empty string when disabled', () => {
      const result = getSliderClasses(true);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should include custom className when provided', () => {
      const customClass = 'custom-slider-class';
      const result = getSliderClasses(false, customClass);
      expect(result).toContain(customClass);
    });

    it('should combine all classes correctly', () => {
      const customClass = 'custom-class';
      const result = getSliderClasses(true, customClass);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
      expect(result).toContain(customClass);
    });
  });

  describe('validateSliderValue', () => {
    it('should return value when within bounds', () => {
      expect(validateSliderValue(50, 0, 100)).toBe(50);
      expect(validateSliderValue(0, 0, 100)).toBe(0);
      expect(validateSliderValue(100, 0, 100)).toBe(100);
    });

    it('should clamp value to minimum when below range', () => {
      expect(validateSliderValue(-10, 0, 100)).toBe(0);
      expect(validateSliderValue(5, 10, 100)).toBe(10);
    });

    it('should clamp value to maximum when above range', () => {
      expect(validateSliderValue(150, 0, 100)).toBe(100);
      expect(validateSliderValue(95, 0, 90)).toBe(90);
    });

    it('should handle edge cases', () => {
      expect(validateSliderValue(50, 50, 50)).toBe(50);
      expect(validateSliderValue(-Infinity, 0, 100)).toBe(0);
      expect(validateSliderValue(Infinity, 0, 100)).toBe(100);
    });
  });

  describe('formatSliderValue', () => {
    it('should format integer values correctly', () => {
      expect(formatSliderValue(50, 1)).toBe('50');
      expect(formatSliderValue(0, 1)).toBe('0');
      expect(formatSliderValue(100, 5)).toBe('100');
    });

    it('should format decimal values with correct precision', () => {
      expect(formatSliderValue(50.5, 0.1)).toBe('50.5');
      expect(formatSliderValue(50.55, 0.01)).toBe('50.55');
      expect(formatSliderValue(50.555, 0.001)).toBe('50.555');
    });

    it('should handle step values correctly', () => {
      expect(formatSliderValue(50.123456, 0.1)).toBe('50.1');
      expect(formatSliderValue(50.123456, 0.01)).toBe('50.12');
      expect(formatSliderValue(50.123456, 0.001)).toBe('50.123');
    });

    it('should handle integer step values', () => {
      expect(formatSliderValue(50.7, 1)).toBe('51');
      expect(formatSliderValue(50.1, 5)).toBe('50');
    });

    it('should handle edge cases', () => {
      expect(formatSliderValue(0, 0.1)).toBe('0.0');
      expect(formatSliderValue(0.0, 1)).toBe('0');
    });
  });
}); 