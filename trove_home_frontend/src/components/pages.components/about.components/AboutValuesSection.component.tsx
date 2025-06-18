import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutValuesSectionProps, CompanyValue } from './AboutValuesSection.types';

/**
 * AboutValuesSection Component
 * 
 * A reusable values section component that displays company values
 * Supports customizable values data and responsive grid layout
 */
export class AboutValuesSectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-16 px-4 bg-white dark:bg-gray-900';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-6xl mx-auto';
  private static readonly TITLE_CLASSES = 'text-3xl md:text-4xl font-bold text-primary mb-12 text-center';
  private static readonly GRID_CONTAINER_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
  private static readonly VALUE_CARD_CLASSES = 'text-center p-6';
  private static readonly VALUE_ICON_CLASSES = 'w-16 h-16 bg-gradient-to-br from-primary to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl';
  private static readonly VALUE_TITLE_CLASSES = 'text-xl font-semibold text-gray-800 dark:text-white mb-3';
  private static readonly VALUE_DESCRIPTION_CLASSES = 'text-gray-600 dark:text-gray-400 leading-relaxed';

  public static getSectionContainerClasses(): string {
    return this.SECTION_CONTAINER_CLASSES;
  }

  public static getContentContainerClasses(): string {
    return this.CONTENT_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getGridContainerClasses(): string {
    return this.GRID_CONTAINER_CLASSES;
  }

  public static getValueCardClasses(): string {
    return this.VALUE_CARD_CLASSES;
  }

  public static getValueIconClasses(): string {
    return this.VALUE_ICON_CLASSES;
  }

  public static getValueTitleClasses(): string {
    return this.VALUE_TITLE_CLASSES;
  }

  public static getValueDescriptionClasses(): string {
    return this.VALUE_DESCRIPTION_CLASSES;
  }

  public static getValueIcon(valueKey: string): string {
    const iconMap: Record<string, string> = {
      'about.values.innovation.title': '💡',
      'about.values.transparency.title': '🔍',
      'about.values.excellence.title': '⭐',
      'about.values.accessibility.title': '🌐',
      innovation: '💡',
      transparency: '🔍',
      excellence: '⭐',
      accessibility: '🌐'
    };
    
    // First try the full key, then try the last part
    const fullKey = valueKey;
    const lastPart = valueKey.split('.').pop() || '';
    
    return iconMap[fullKey] || iconMap[lastPart] || '🎯';
  }
}

const AboutValuesSection: React.FC<AboutValuesSectionProps> = ({ 
  className = '',
  titleKey = 'about.values.title',
  companyValues
}) => {
  const { t } = useTranslation();

  const defaultValues: CompanyValue[] = [
    {
      id: 'innovation',
      titleKey: 'about.values.innovation.title',
      descriptionKey: 'about.values.innovation.description'
    },
    {
      id: 'transparency',
      titleKey: 'about.values.transparency.title',
      descriptionKey: 'about.values.transparency.description'
    },
    {
      id: 'excellence',
      titleKey: 'about.values.excellence.title',
      descriptionKey: 'about.values.excellence.description'
    },
    {
      id: 'accessibility',
      titleKey: 'about.values.accessibility.title',
      descriptionKey: 'about.values.accessibility.description'
    }
  ];

  const valuesToDisplay = companyValues || defaultValues;

  return (
    <section className={`${AboutValuesSectionClass.getSectionContainerClasses()} ${className}`}>
      <div className={AboutValuesSectionClass.getContentContainerClasses()}>
        <h2 className={AboutValuesSectionClass.getTitleClasses()}>
          {t(titleKey)}
        </h2>
        
        <div className={AboutValuesSectionClass.getGridContainerClasses()}>
          {valuesToDisplay.map((value) => {
            const icon = value.icon || AboutValuesSectionClass.getValueIcon(value.titleKey);
            
            return (
              <div 
                key={value.id} 
                className={AboutValuesSectionClass.getValueCardClasses()}
              >
                <div className={AboutValuesSectionClass.getValueIconClasses()}>
                  {icon}
                </div>
                <h3 className={AboutValuesSectionClass.getValueTitleClasses()}>
                  {t(value.titleKey)}
                </h3>
                <p className={AboutValuesSectionClass.getValueDescriptionClasses()}>
                  {t(value.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection; 