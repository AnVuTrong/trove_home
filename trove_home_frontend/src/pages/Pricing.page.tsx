import React from 'react';
import {
  PricingPackagesSection,
  PricingTestimonialsSection,
  PricingPerformanceSection
} from '../components/pages.components/pricing.components';
import { SubpageHeroSection, SubpageHeroVariant } from '../components/ui.components';
import holographicBgDark from '../assets/trove_abstract_bg/dark/green_fluid_holographic_2_dark.jpg';
import holographicBgLight from '../assets/trove_abstract_bg/light/green_fluid_holographic_light_2.png';
import ThemeContext from '../contexts/ThemeContext.context';
import { useContext } from 'react';

/**
 * PricingPage Component
 * 
 * Main Pricing page that combines all pricing section components
 * Displays hero section, packages, testimonials, and performance metrics
 * Supports both English and Vietnamese languages
 */
const PricingPage: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.isDarkMode ?? false;
  const holographicBg = isDarkMode ? holographicBgDark : holographicBgLight;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SubpageHeroSection
        titleKey="pricing.hero.title"
        descriptionKey="pricing.hero.description"
        variant={SubpageHeroVariant.IMAGE_OVERLAY}
        backgroundImage={holographicBg}
        backgroundImageAlt="Trove - Pricing Background"
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