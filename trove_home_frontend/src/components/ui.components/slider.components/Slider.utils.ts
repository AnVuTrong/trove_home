import { SLIDER_CLASSES } from './Slider.constants';

/**
 * Generates the appropriate CSS classes for the slider based on its state
 * @param disabled - Whether the slider is disabled
 * @param customClassName - Additional custom CSS classes
 * @returns Combined CSS classes string
 */
export const getSliderClasses = (disabled: boolean, customClassName?: string): string => {
  const baseClasses = SLIDER_CLASSES.BASE;
  const disabledClasses = disabled ? SLIDER_CLASSES.DISABLED : '';
  const combinedClasses = `${baseClasses} ${disabledClasses}`.trim();
  
  return customClassName ? `${combinedClasses} ${customClassName}`.trim() : combinedClasses;
};

/**
 * Validates slider value against min/max constraints
 * @param value - The value to validate
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns Clamped value within bounds
 */
export const validateSliderValue = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Formats the slider value for display
 * @param value - The value to format
 * @param step - The step value to determine decimal places
 * @returns Formatted value string
 */
export const formatSliderValue = (value: number, step: number): string => {
  const decimalPlaces = step < 1 ? Math.max(0, -Math.floor(Math.log10(step))) : 0;
  return value.toFixed(decimalPlaces);
}; 