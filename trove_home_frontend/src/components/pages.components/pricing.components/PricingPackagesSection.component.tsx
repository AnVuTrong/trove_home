import React from 'react';
import { useTranslation } from 'react-i18next';
import { PricingPackagesSectionProps } from './PricingPackagesSection.types';

/**
 * PricingPackagesSection Component
 * 
 * A reusable packages section component for the pricing page
 * Displays 4 different pricing packages with features
 */
export class PricingPackagesSectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-20 px-4 bg-white dark:bg-gray-900';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-7xl mx-auto';
  private static readonly HEADER_CONTAINER_CLASSES = 'text-center mb-16';
  private static readonly TITLE_CLASSES = 'text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4';
  private static readonly SUBTITLE_CLASSES = 'text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto';
  private static readonly PACKAGES_GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
  private static readonly PACKAGE_CARD_CLASSES = 'relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-shadow duration-300';
  private static readonly POPULAR_PACKAGE_CARD_CLASSES = 'relative bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-primary p-8 hover:shadow-2xl transition-shadow duration-300 transform scale-105';
  private static readonly POPULAR_BADGE_CLASSES = 'absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold';
  private static readonly PACKAGE_HEADER_CLASSES = 'text-center mb-8';
  private static readonly PACKAGE_NAME_CLASSES = 'text-2xl font-bold text-gray-900 dark:text-white mb-2';
  private static readonly PACKAGE_PRICE_CLASSES = 'text-4xl font-bold text-primary mb-1';
  private static readonly PACKAGE_PERIOD_CLASSES = 'text-gray-500 dark:text-gray-400';
  private static readonly PACKAGE_DESCRIPTION_CLASSES = 'text-gray-600 dark:text-gray-300 mt-4';
  private static readonly FEATURES_LIST_CLASSES = 'space-y-4 mb-8';
  private static readonly FEATURE_CLASSES = 'flex items-center';
  private static readonly FEATURE_ICON_CLASSES = 'w-5 h-5 text-green-500 mr-3 flex-shrink-0';
  private static readonly PACKAGE_BUTTON_CLASSES = 'w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200';
  private static readonly POPULAR_BUTTON_CLASSES = 'w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200';

  public static getSectionContainerClasses(): string {
    return this.SECTION_CONTAINER_CLASSES;
  }

  public static getContentContainerClasses(): string {
    return this.CONTENT_CONTAINER_CLASSES;
  }

  public static getHeaderContainerClasses(): string {
    return this.HEADER_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getSubtitleClasses(): string {
    return this.SUBTITLE_CLASSES;
  }

  public static getPackagesGridClasses(): string {
    return this.PACKAGES_GRID_CLASSES;
  }

  public static getPackageCardClasses(isPopular: boolean): string {
    return isPopular ? this.POPULAR_PACKAGE_CARD_CLASSES : this.PACKAGE_CARD_CLASSES;
  }

  public static getPopularBadgeClasses(): string {
    return this.POPULAR_BADGE_CLASSES;
  }

  public static getPackageHeaderClasses(): string {
    return this.PACKAGE_HEADER_CLASSES;
  }

  public static getPackageNameClasses(): string {
    return this.PACKAGE_NAME_CLASSES;
  }

  public static getPackagePriceClasses(): string {
    return this.PACKAGE_PRICE_CLASSES;
  }

  public static getPackagePeriodClasses(): string {
    return this.PACKAGE_PERIOD_CLASSES;
  }

  public static getPackageDescriptionClasses(): string {
    return this.PACKAGE_DESCRIPTION_CLASSES;
  }

  public static getFeaturesListClasses(): string {
    return this.FEATURES_LIST_CLASSES;
  }

  public static getFeatureClasses(): string {
    return this.FEATURE_CLASSES;
  }

  public static getFeatureIconClasses(): string {
    return this.FEATURE_ICON_CLASSES;
  }

  public static getPackageButtonClasses(isPopular: boolean): string {
    return isPopular ? this.POPULAR_BUTTON_CLASSES : this.PACKAGE_BUTTON_CLASSES;
  }
}

const CheckIcon: React.FC = () => (
  <svg className={PricingPackagesSectionClass.getFeatureIconClasses()} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PricingPackagesSection: React.FC<PricingPackagesSectionProps> = ({ 
  className = '',
  titleKey = 'pricing.packages.title',
  subtitleKey = 'pricing.packages.subtitle'
}) => {
  const { t } = useTranslation();

  const packages = ['starter', 'professional', 'enterprise', 'premium'];

  return (
    <section className={`${PricingPackagesSectionClass.getSectionContainerClasses()} ${className}`}>
      <div className={PricingPackagesSectionClass.getContentContainerClasses()}>
        <div className={PricingPackagesSectionClass.getHeaderContainerClasses()}>
          <h2 className={PricingPackagesSectionClass.getTitleClasses()}>
            {t(titleKey)}
          </h2>
          <p className={PricingPackagesSectionClass.getSubtitleClasses()}>
            {t(subtitleKey)}
          </p>
        </div>

        <div className={PricingPackagesSectionClass.getPackagesGridClasses()}>
          {packages.map((packageKey) => {
            const popularValue = t(`pricing.packages.${packageKey}.popular`);
            const isPopular = popularValue === 'true';
            
            return (
              <div key={packageKey} className={PricingPackagesSectionClass.getPackageCardClasses(isPopular)}>
                {isPopular && (
                  <div className={PricingPackagesSectionClass.getPopularBadgeClasses()}>
                    Most Popular
                  </div>
                )}
                
                <div className={PricingPackagesSectionClass.getPackageHeaderClasses()}>
                  <h3 className={PricingPackagesSectionClass.getPackageNameClasses()}>
                    {t(`pricing.packages.${packageKey}.name`)}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className={PricingPackagesSectionClass.getPackagePriceClasses()}>
                      {t(`pricing.packages.${packageKey}.price`)}
                    </span>
                    <span className={PricingPackagesSectionClass.getPackagePeriodClasses()}>
                      {t(`pricing.packages.${packageKey}.period`)}
                    </span>
                  </div>
                  <p className={PricingPackagesSectionClass.getPackageDescriptionClasses()}>
                    {t(`pricing.packages.${packageKey}.description`)}
                  </p>
                </div>

                <ul className={PricingPackagesSectionClass.getFeaturesListClasses()}>
                  {(() => {
                    try {
                      const features = t(`pricing.packages.${packageKey}.features`, { returnObjects: true });
                      const featuresArray = Array.isArray(features) ? features : [];
                      return featuresArray.length > 0 ? featuresArray.map((feature, index) => (
                        <li key={index} className={PricingPackagesSectionClass.getFeatureClasses()}>
                          <CheckIcon />
                          <span className="text-gray-700 dark:text-gray-300">{String(feature)}</span>
                        </li>
                      )) : (
                        <li className={PricingPackagesSectionClass.getFeatureClasses()}>
                          <CheckIcon />
                          <span className="text-gray-700 dark:text-gray-300">Features coming soon...</span>
                        </li>
                      );
                    } catch (error) {
                      return (
                        <li className={PricingPackagesSectionClass.getFeatureClasses()}>
                          <CheckIcon />
                          <span className="text-gray-700 dark:text-gray-300">Features coming soon...</span>
                        </li>
                      );
                    }
                  })()}
                </ul>

                <button className={PricingPackagesSectionClass.getPackageButtonClasses(isPopular)}>
                  {t(`pricing.packages.${packageKey}.button`)}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPackagesSection; 