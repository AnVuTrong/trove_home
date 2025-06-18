export interface CompanyValue {
  /**
   * Unique identifier for the value
   */
  id: string;
  
  /**
   * Translation key for the value title
   */
  titleKey: string;
  
  /**
   * Translation key for the value description
   */
  descriptionKey: string;
  
  /**
   * Optional icon to display (emoji or icon component)
   */
  icon?: string;
}

export interface AboutValuesSectionProps {
  /**
   * Additional CSS classes to apply to the section
   */
  className?: string;
  
  /**
   * Translation key for the section title
   * @default 'about.values.title'
   */
  titleKey?: string;
  
  /**
   * Array of company values to display
   * If not provided, will use default values from translations
   */
  companyValues?: CompanyValue[];
} 