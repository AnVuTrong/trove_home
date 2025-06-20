import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutHeroSectionProps } from './AboutHeroSection.types';
import holographicBg from '../../../assets/trove_abstract_bg/dark/green_fluid_holographic_2_dark.jpg';

/**
 * AboutHeroSection Component
 * 
 * A reusable hero section component for the About page
 * Displays the main title and description with holographic background
 */
export class AboutHeroSectionClass {
  private static readonly HERO_CONTAINER_CLASSES = 'min-h-[60vh] flex flex-col items-center justify-center relative px-4 bg-cover bg-center bg-no-repeat';
  private static readonly OVERLAY_CLASSES = 'absolute inset-0 bg-gradient-to-br from-primary/70 to-green-600/60 dark:from-primary/80 dark:to-green-800/70';
  private static readonly CONTENT_CONTAINER_CLASSES = 'relative z-10 text-center';
  private static readonly TITLE_CLASSES = 'text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg';
  private static readonly DESCRIPTION_CLASSES = 'text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed drop-shadow-md';

  public static getHeroContainerClasses(): string {
    return this.HERO_CONTAINER_CLASSES;
  }

  public static getOverlayClasses(): string {
    return this.OVERLAY_CLASSES;
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

  public static getBackgroundStyle(): React.CSSProperties {
    return {
      backgroundImage: `url(${holographicBg})`,
    };
  }
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ 
  className = '',
  titleKey = 'about.hero.title',
  descriptionKey = 'about.hero.description'
}) => {
  const { t } = useTranslation();

  return (
    <section 
      className={`${AboutHeroSectionClass.getHeroContainerClasses()} ${className}`}
      style={AboutHeroSectionClass.getBackgroundStyle()}
    >
      {/* Overlay for better text readability */}
      <div className={AboutHeroSectionClass.getOverlayClasses()}></div>
      
      {/* Content */}
      <div className={AboutHeroSectionClass.getContentContainerClasses()}>
        <h1 className={AboutHeroSectionClass.getTitleClasses()}>
          {t(titleKey)}
        </h1>
        <p className={AboutHeroSectionClass.getDescriptionClasses()}>
          {t(descriptionKey)}
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection; 