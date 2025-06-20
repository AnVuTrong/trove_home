export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  button: string;
  popular: boolean;
}

export interface PricingPackagesSectionProps {
  className?: string;
  titleKey?: string;
  subtitleKey?: string;
}

export interface PricingPackagesSectionStyles {
  sectionContainer: string;
  contentContainer: string;
  headerContainer: string;
  title: string;
  subtitle: string;
  packagesGrid: string;
  packageCard: string;
  popularPackageCard: string;
  popularBadge: string;
  packageHeader: string;
  packageName: string;
  packagePrice: string;
  packagePeriod: string;
  packageDescription: string;
  featuresList: string;
  feature: string;
  featureIcon: string;
  packageButton: string;
  popularButton: string;
} 