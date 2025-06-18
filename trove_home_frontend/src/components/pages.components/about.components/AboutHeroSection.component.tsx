import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutHeroSectionProps } from './AboutHeroSection.types';

/**
 * AboutHeroSection Component
 * 
 * A reusable hero section component for the About page
 * Displays the main title and description with background styling
 */
export class AboutHeroSectionClass {
  private static readonly HERO_CONTAINER_CLASSES = 'min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-green-100 dark:from-primary/20 dark:to-green-900/20 px-4';
  private static readonly TITLE_CLASSES = 'text-4xl md:text-6xl font-bold text-primary mb-6 text-center';
  private static readonly DESCRIPTION_CLASSES = 'text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl text-center leading-relaxed';

  public static getHeroContainerClasses(): string {
    return this.HERO_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getDescriptionClasses(): string {
    return this.DESCRIPTION_CLASSES;
  }
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ 
  className = '',
  titleKey = 'about.hero.title',
  descriptionKey = 'about.hero.description'
}) => {
  const { t } = useTranslation();

  return (
    <section className={`${AboutHeroSectionClass.getHeroContainerClasses()} ${className}`}>
      <h1 className={AboutHeroSectionClass.getTitleClasses()}>
        {t(titleKey)}
      </h1>
      <p className={AboutHeroSectionClass.getDescriptionClasses()}>
        {t(descriptionKey)}
      </p>
    </section>
  );
};

export default AboutHeroSection; 