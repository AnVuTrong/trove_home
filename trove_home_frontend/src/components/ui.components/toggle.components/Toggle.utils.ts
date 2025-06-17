import { 
  ToggleSize, 
  ToggleVariant, 
  ToggleSizeClasses 
} from './Toggle.types';
import { 
  TOGGLE_SIZE_CLASSES, 
  TOGGLE_VARIANT_CLASSES, 
  TOGGLE_TRANSLATE_CLASSES,
  TOGGLE_BASE_CLASSES,
  TOGGLE_DEFAULTS
} from './Toggle.constants';

/**
 * Gets the size classes for a toggle component
 * @param size - The size variant of the toggle
 * @returns Size classes object containing toggle, thumb, and icon classes
 */
export const getSizeClasses = (size: ToggleSize = TOGGLE_DEFAULTS.SIZE): ToggleSizeClasses => {
  return TOGGLE_SIZE_CLASSES[size];
};

/**
 * Gets the variant classes for a toggle component based on checked state
 * @param variant - The variant style of the toggle
 * @param checked - Whether the toggle is checked
 * @returns CSS classes string for the variant
 */
export const getVariantClasses = (variant: ToggleVariant = TOGGLE_DEFAULTS.VARIANT, checked: boolean): string => {
  if (!checked) {
    return TOGGLE_BASE_CLASSES.UNCHECKED_BG;
  }
  
  return TOGGLE_VARIANT_CLASSES[variant];
};

/**
 * Gets the transform translate class for the thumb based on size and checked state
 * @param size - The size variant of the toggle
 * @param checked - Whether the toggle is checked
 * @returns CSS transform class string
 */
export const getThumbTranslateClass = (size: ToggleSize = TOGGLE_DEFAULTS.SIZE, checked: boolean): string => {
  if (!checked) return 'translate-x-0';
  
  return TOGGLE_TRANSLATE_CLASSES[size];
};

/**
 * Generates complete toggle classes combining base, size, variant, and disabled state
 * @param size - The size variant of the toggle
 * @param variant - The variant style of the toggle
 * @param checked - Whether the toggle is checked
 * @param disabled - Whether the toggle is disabled
 * @returns Complete CSS classes string for the toggle
 */
export const getToggleClasses = (
  size: ToggleSize = TOGGLE_DEFAULTS.SIZE,
  variant: ToggleVariant = TOGGLE_DEFAULTS.VARIANT,
  checked: boolean,
  disabled: boolean = TOGGLE_DEFAULTS.DISABLED
): string => {
  const sizeClasses = getSizeClasses(size);
  const variantClasses = getVariantClasses(variant, checked);
  const disabledClasses = disabled ? TOGGLE_BASE_CLASSES.DISABLED : '';
  
  return `${TOGGLE_BASE_CLASSES.TOGGLE} ${sizeClasses.toggle} ${variantClasses} ${disabledClasses}`.trim();
};

/**
 * Generates complete thumb classes combining base, size, and transform
 * @param size - The size variant of the toggle
 * @param checked - Whether the toggle is checked
 * @returns Complete CSS classes string for the thumb
 */
export const getThumbClasses = (size: ToggleSize = TOGGLE_DEFAULTS.SIZE, checked: boolean): string => {
  const sizeClasses = getSizeClasses(size);
  const thumbTranslateClass = getThumbTranslateClass(size, checked);
  
  return `${TOGGLE_BASE_CLASSES.THUMB} ${sizeClasses.thumb} ${thumbTranslateClass}`;
};

/**
 * Gets the appropriate text color class based on active state
 * @param isActive - Whether the element should appear active/highlighted
 * @returns CSS color class string
 */
export const getTextColorClass = (isActive: boolean): string => {
  return isActive ? TOGGLE_BASE_CLASSES.ACTIVE_TEXT : TOGGLE_BASE_CLASSES.INACTIVE_TEXT;
};

/**
 * Gets the appropriate icon color class based on whether the icon is under the thumb
 * @param isUnderThumb - Whether the icon is currently under the thumb
 * @param isActive - Whether the icon represents the active state
 * @returns CSS color class string for icons considering thumb position
 */
export const getThumbAwareIconColorClass = (isUnderThumb: boolean, isActive: boolean): string => {
  if (isUnderThumb) {
    return TOGGLE_BASE_CLASSES.THUMB_COVERED_ICON;
  }
  return isActive ? TOGGLE_BASE_CLASSES.ACTIVE_ICON : TOGGLE_BASE_CLASSES.INACTIVE_ICON;
}; 