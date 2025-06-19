import React from 'react';
import {
  SubpageHeroVariant,
  SubpageHeroSize,
  SubpageHeroSectionProps,
  SubpageHeroStyleConfig
} from './SubpageHeroSection.types';
import {
  SUBPAGE_HERO_VARIANT_CLASSES,
  SUBPAGE_HERO_SIZE_CLASSES,
  SUBPAGE_HERO_COMMON_CLASSES,
  SUBPAGE_HERO_DEFAULTS
} from './SubpageHeroSection.constants';

/**
 * Utility class for SubpageHeroSection styling and configuration
 * Follows OOP principles with static methods for reusability
 */
export class SubpageHeroSectionUtils {
  /**
   * Validates props and provides defaults
   */
  public static validateAndNormalizeProps(props: SubpageHeroSectionProps): Required<Omit<SubpageHeroSectionProps, 'backgroundImageAlt' | 'data-testid'>> & Pick<SubpageHeroSectionProps, 'backgroundImageAlt' | 'data-testid'> {
    const {
      variant = SUBPAGE_HERO_DEFAULTS.variant,
      size = SUBPAGE_HERO_DEFAULTS.size,
      overlayOpacity = SUBPAGE_HERO_DEFAULTS.overlayOpacity,
      className = '',
      titleClassName = '',
      descriptionClassName = '',
      style = {},
      backgroundImage = '',
      ...rest
    } = props;

    // Validate IMAGE_OVERLAY variant has backgroundImage
    if (variant === SubpageHeroVariant.IMAGE_OVERLAY && !backgroundImage) {
      console.warn('SubpageHeroSection: IMAGE_OVERLAY variant requires backgroundImage prop');
    }

    return {
      ...rest,
      variant,
      size,
      overlayOpacity: Math.max(0, Math.min(100, overlayOpacity)),
      className,
      titleClassName,
      descriptionClassName,
      style,
      backgroundImage
    };
  }

  /**
   * Generates complete style configuration for the hero section
   */
  public static generateStyleConfig(props: SubpageHeroSectionProps): SubpageHeroStyleConfig {
    const normalizedProps = this.validateAndNormalizeProps(props);
    const { variant, size, backgroundImage, overlayOpacity, className, titleClassName, descriptionClassName, style } = normalizedProps;

    const variantClasses = SUBPAGE_HERO_VARIANT_CLASSES[variant];
    const sizeClasses = SUBPAGE_HERO_SIZE_CLASSES[size];

    return {
      containerClasses: this.buildContainerClasses(variantClasses.container, sizeClasses, className),
      overlayClasses: this.buildOverlayClasses(variantClasses.overlay, overlayOpacity),
      contentContainerClasses: this.buildContentContainerClasses(variantClasses.content),
      titleClasses: this.buildTitleClasses(variantClasses.title, titleClassName),
      descriptionClasses: this.buildDescriptionClasses(variantClasses.description, descriptionClassName),
      backgroundStyle: this.buildBackgroundStyle(variant, backgroundImage, style)
    };
  }

  /**
   * Builds container CSS classes
   */
  private static buildContainerClasses(variantContainer: string, sizeClasses: string, customClassName: string): string {
    return [
      SUBPAGE_HERO_COMMON_CLASSES.baseContainer,
      sizeClasses,
      variantContainer,
      customClassName
    ].filter(Boolean).join(' ');
  }

  /**
   * Builds overlay CSS classes with dynamic opacity
   */
  private static buildOverlayClasses(variantOverlay: string, overlayOpacity: number): string {
    if (!variantOverlay) return '';
    
    // Replace opacity values in the overlay classes with custom opacity
    return variantOverlay.replace(/\/\d+/g, `/${overlayOpacity}`);
  }

  /**
   * Builds content container CSS classes
   */
  private static buildContentContainerClasses(variantContent: string): string {
    return [
      SUBPAGE_HERO_COMMON_CLASSES.contentContainer,
      variantContent
    ].filter(Boolean).join(' ');
  }

  /**
   * Builds title CSS classes
   */
  private static buildTitleClasses(variantTitle: string, customTitleClassName: string): string {
    return [
      SUBPAGE_HERO_COMMON_CLASSES.baseTitle,
      SUBPAGE_HERO_COMMON_CLASSES.responsiveTitle,
      variantTitle,
      customTitleClassName
    ].filter(Boolean).join(' ');
  }

  /**
   * Builds description CSS classes
   */
  private static buildDescriptionClasses(variantDescription: string, customDescriptionClassName: string): string {
    return [
      SUBPAGE_HERO_COMMON_CLASSES.baseDescription,
      SUBPAGE_HERO_COMMON_CLASSES.responsiveDescription,
      variantDescription,
      customDescriptionClassName
    ].filter(Boolean).join(' ');
  }

  /**
   * Builds background style object
   */
  private static buildBackgroundStyle(variant: SubpageHeroVariant, backgroundImage: string, customStyle: React.CSSProperties): React.CSSProperties {
    const baseStyle: React.CSSProperties = { ...customStyle };

    if (variant === SubpageHeroVariant.IMAGE_OVERLAY && backgroundImage) {
      baseStyle.backgroundImage = `url(${backgroundImage})`;
    }

    return baseStyle;
  }

  /**
   * Validates if a variant requires a background image
   */
  public static requiresBackgroundImage(variant: SubpageHeroVariant): boolean {
    return variant === SubpageHeroVariant.IMAGE_OVERLAY;
  }

  /**
   * Gets accessibility attributes for the hero section
   */
  public static getAccessibilityAttributes(titleKey: string): Record<string, string> {
    return {
      role: 'region',
      'aria-labelledby': `subpage-hero-title-${titleKey.replace(/\./g, '-')}`
    };
  }

  /**
   * Generates a unique ID for the title element
   */
  public static generateTitleId(titleKey: string): string {
    return `subpage-hero-title-${titleKey.replace(/\./g, '-')}`;
  }
} 