import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubpageHeroSectionProps, SubpageHeroVariant } from './SubpageHeroSection.types';
import { SubpageHeroSectionUtils } from './SubpageHeroSection.utils';

/**
 * SubpageHeroSection Component
 * 
 * A highly reusable and configurable hero section component for subpages
 * Supports multiple variants (image overlay, gradient, solid) and sizes
 * Follows OOP principles with proper separation of concerns
 * 
 * @example
 * // Image overlay variant (like About page)
 * <SubpageHeroSection
 *   titleKey="about.hero.title"
 *   descriptionKey="about.hero.description"
 *   variant={SubpageHeroVariant.IMAGE_OVERLAY}
 *   backgroundImage={holographicBg}
 * />
 * 
 * @example
 * // Gradient variant (like Pricing page)
 * <SubpageHeroSection
 *   titleKey="pricing.hero.title"
 *   descriptionKey="pricing.hero.description"
 *   variant={SubpageHeroVariant.GRADIENT}
 * />
 */
export class SubpageHeroSectionClass {
  /**
   * Factory method to create style configuration
   */
  public static createStyleConfig(props: SubpageHeroSectionProps) {
    return SubpageHeroSectionUtils.generateStyleConfig(props);
  }

  /**
   * Factory method to create accessibility attributes
   */
  public static createAccessibilityAttributes(titleKey: string) {
    return SubpageHeroSectionUtils.getAccessibilityAttributes(titleKey);
  }

  /**
   * Factory method to create unique title ID
   */
  public static createTitleId(titleKey: string) {
    return SubpageHeroSectionUtils.generateTitleId(titleKey);
  }

  /**
   * Validation method for props
   */
  public static validateProps(props: SubpageHeroSectionProps) {
    return SubpageHeroSectionUtils.validateAndNormalizeProps(props);
  }
}

/**
 * Functional component implementation of SubpageHeroSection
 */
const SubpageHeroSection: React.FC<SubpageHeroSectionProps> = (props) => {
  const { t } = useTranslation();
  
  // Validate and normalize props using the utility class
  const normalizedProps = SubpageHeroSectionClass.validateProps(props);
  
  // Generate style configuration
  const styleConfig = SubpageHeroSectionClass.createStyleConfig(normalizedProps);
  
  // Generate accessibility attributes
  const accessibilityAttributes = SubpageHeroSectionClass.createAccessibilityAttributes(normalizedProps.titleKey);
  
  // Generate unique title ID
  const titleId = SubpageHeroSectionClass.createTitleId(normalizedProps.titleKey);

  /**
   * Renders the overlay element for image-based variants
   */
  const renderOverlay = (): React.ReactNode => {
    if (!styleConfig.overlayClasses) return null;
    
    return (
      <div 
        className={styleConfig.overlayClasses}
        aria-hidden="true"
      />
    );
  };

  /**
   * Renders the main content (title and description)
   */
  const renderContent = (): React.ReactNode => {
    return (
      <div className={styleConfig.contentContainerClasses}>
        <h1 
          id={titleId}
          className={styleConfig.titleClasses}
        >
          {t(normalizedProps.titleKey)}
        </h1>
        <p className={styleConfig.descriptionClasses}>
          {t(normalizedProps.descriptionKey)}
        </p>
      </div>
    );
  };

  /**
   * Renders the background image (for screen readers)
   */
  const renderBackgroundImageAlt = (): React.ReactNode => {
    if (normalizedProps.variant !== SubpageHeroVariant.IMAGE_OVERLAY || !normalizedProps.backgroundImageAlt) {
      return null;
    }

    return (
      <img
        src={normalizedProps.backgroundImage}
        alt={normalizedProps.backgroundImageAlt}
        className="sr-only"
        aria-hidden="true"
      />
    );
  };

  return (
    <section
      className={styleConfig.containerClasses}
      style={styleConfig.backgroundStyle}
      data-testid={normalizedProps['data-testid']}
      {...accessibilityAttributes}
    >
      {/* Background image for accessibility */}
      {renderBackgroundImageAlt()}
      
      {/* Overlay for image variants */}
      {renderOverlay()}
      
      {/* Main content */}
      {renderContent()}
    </section>
  );
};

export default SubpageHeroSection; 