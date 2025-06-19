import React from 'react';
import {
  PricingPackagesSection,
  PricingTestimonialsSection,
  PricingPerformanceSection
} from '../components/pages.components/pricing.components';
import { SubpageHeroSection, SubpageHeroVariant } from '../components/ui.components';

/**
 * PricingPage Component
 * 
 * Main Pricing page that combines all pricing section components
 * Displays hero section, packages, testimonials, and performance metrics
 * Supports both English and Vietnamese languages
 */
const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SubpageHeroSection
        titleKey="pricing.hero.title"
        descriptionKey="pricing.hero.description"
        variant={SubpageHeroVariant.GRADIENT}
        data-testid="pricing-hero-section"
      />
      
      {/* Packages Section - 4 different pricing tiers */}
      <PricingPackagesSection />
      
      {/* Testimonials Section */}
      <PricingTestimonialsSection />
      
      {/* Performance/Success Chart Section */}
      <PricingPerformanceSection />
    </div>
  );
};

export default PricingPage; 