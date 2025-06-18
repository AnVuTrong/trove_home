import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutCompanySectionProps } from './AboutCompanySection.types';

/**
 * AboutCompanySection Component
 * 
 * A reusable company information section component
 * Displays company description and placeholder for detailed company information
 */
export class AboutCompanySectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-16 px-4 bg-white dark:bg-gray-900';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-6xl mx-auto';
  private static readonly TITLE_CLASSES = 'text-3xl md:text-4xl font-bold text-primary mb-8 text-center';
  private static readonly DESCRIPTION_CLASSES = 'text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed text-center max-w-4xl mx-auto';
  private static readonly PLACEHOLDER_CONTAINER_CLASSES = 'bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600';
  private static readonly PLACEHOLDER_TITLE_CLASSES = 'text-xl font-semibold text-gray-600 dark:text-gray-400 mb-4';
  private static readonly PLACEHOLDER_TEXT_CLASSES = 'text-gray-500 dark:text-gray-500 italic leading-relaxed';

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

  public static getPlaceholderContainerClasses(): string {
    return this.PLACEHOLDER_CONTAINER_CLASSES;
  }

  public static getPlaceholderTitleClasses(): string {
    return this.PLACEHOLDER_TITLE_CLASSES;
  }

  public static getPlaceholderTextClasses(): string {
    return this.PLACEHOLDER_TEXT_CLASSES;
  }
}

const AboutCompanySection: React.FC<AboutCompanySectionProps> = ({ 
  className = '',
  titleKey = 'about.company.title',
  descriptionKey = 'about.company.description',
  placeholderKey = 'about.company.placeholder',
  showPlaceholder = true
}) => {
  const { t } = useTranslation();

  return (
    <section className={`${AboutCompanySectionClass.getSectionContainerClasses()} ${className}`}>
      <div className={AboutCompanySectionClass.getContentContainerClasses()}>
        <h2 className={AboutCompanySectionClass.getTitleClasses()}>
          {t(titleKey)}
        </h2>
        <p className={AboutCompanySectionClass.getDescriptionClasses()}>
          {t(descriptionKey)}
        </p>
        
        {showPlaceholder && (
          <div className={AboutCompanySectionClass.getPlaceholderContainerClasses()}>
            <h3 className={AboutCompanySectionClass.getPlaceholderTitleClasses()}>
              Company Information Section
            </h3>
            <p className={AboutCompanySectionClass.getPlaceholderTextClasses()}>
              {t(placeholderKey)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutCompanySection; 