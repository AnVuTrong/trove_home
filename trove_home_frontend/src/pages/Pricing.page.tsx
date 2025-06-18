import React from 'react';
import {
  PricingHeroSection,
  PricingPackagesSection,
  PricingTestimonialsSection,
  PricingPerformanceSection
} from '../components/pages.components/pricing.components';

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
      <PricingHeroSection />
      
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