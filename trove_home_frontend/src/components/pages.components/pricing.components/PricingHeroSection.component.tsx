import React from 'react';
import { useTranslation } from 'react-i18next';
import { PricingHeroSectionProps } from './PricingHeroSection.types';

/**
 * PricingHeroSection Component
 * 
 * A reusable hero section component for the pricing page
 * Displays the main title and description for pricing
 */
export class PricingHeroSectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-20 px-4 bg-gradient-to-br from-primary/10 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-4xl mx-auto text-center';
  private static readonly TITLE_CLASSES = 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6';
  private static readonly DESCRIPTION_CLASSES = 'text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto';

  public static getSectionContainerClasses(): string {
    return this.SECTION_CONTAINER_CLASSES;
  }

  public static getContentContainerClasses(): string {
    return this.CONTENT_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getDescriptionClasses(): string {
    return this.DESCRIPTION_CLASSES;
  }
}

const PricingHeroSection: React.FC<PricingHeroSectionProps> = ({ 
  className = '',
  titleKey = 'pricing.hero.title',
  descriptionKey = 'pricing.hero.description'
}) => {
  const { t } = useTranslation();

  return (
    <section className={`${PricingHeroSectionClass.getSectionContainerClasses()} ${className}`}>
      <div className={PricingHeroSectionClass.getContentContainerClasses()}>
        <h1 className={PricingHeroSectionClass.getTitleClasses()}>
          {t(titleKey)}
        </h1>
        <p className={PricingHeroSectionClass.getDescriptionClasses()}>
          {t(descriptionKey)}
        </p>
      </div>
    </section>
  );
};

export default PricingHeroSection; 