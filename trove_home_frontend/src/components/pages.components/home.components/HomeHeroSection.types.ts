export interface InvestmentOption {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  icon: string;
}

export interface HomeHeroSectionProps {
  /**
   * Option to preselect, default "default".
   */
  defaultOptionId?: string;
  /**
   * Additional css classes for the section element.
   */
  className?: string;
} 