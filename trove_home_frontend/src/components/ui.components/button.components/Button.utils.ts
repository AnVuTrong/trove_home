import { ButtonVariant, ButtonSize } from './Button.types';
import { BUTTON_VARIANT_CLASSES, BUTTON_SIZE_CLASSES, BUTTON_BASE_CLASSES, BUTTON_DISABLED_CLASSES } from './Button.constants';

export class ButtonStyleUtils {
  static getVariantClasses(variant: ButtonVariant = 'primary'): string {
    return BUTTON_VARIANT_CLASSES[variant];
  }

  static getSizeClasses(size: ButtonSize = 'md'): string {
    return BUTTON_SIZE_CLASSES[size];
  }

  static getDisabledClasses(disabled: boolean): string {
    return disabled ? BUTTON_DISABLED_CLASSES : '';
  }

  static getCombinedClasses(
    variant: ButtonVariant = 'primary',
    size: ButtonSize = 'md',
    disabled: boolean = false,
    className: string = ''
  ): string {
    const variantClasses = this.getVariantClasses(variant);
    const sizeClasses = this.getSizeClasses(size);
    const disabledClasses = this.getDisabledClasses(disabled);
    
    return `${BUTTON_BASE_CLASSES} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim();
  }
} 