export interface AboutCompanySectionProps {
  /**
   * Additional CSS classes to apply to the section
   */
  className?: string;
  
  /**
   * Translation key for the section title
   * @default 'about.company.title'
   */
  titleKey?: string;
  
  /**
   * Translation key for the section description
   * @default 'about.company.description'
   */
  descriptionKey?: string;
  
  /**
   * Translation key for the placeholder text
   * @default 'about.company.placeholder'
   */
  placeholderKey?: string;
  
  /**
   * Whether to show the placeholder section
   * @default true
   */
  showPlaceholder?: boolean;
} 