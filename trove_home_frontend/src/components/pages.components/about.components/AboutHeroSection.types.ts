export interface AboutHeroSectionProps {
  /**
   * Additional CSS classes to apply to the hero section
   */
  className?: string;
  
  /**
   * Translation key for the title
   * @default 'about.hero.title'
   */
  titleKey?: string;
  
  /**
   * Translation key for the description
   * @default 'about.hero.description'
   */
  descriptionKey?: string;
} 