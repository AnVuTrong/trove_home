import React from 'react';
import {
  AboutCompanySection,
  AboutTeamSection,
  AboutValuesSection
} from '../components/pages.components/about.components';
import { SubpageHeroSection, SubpageHeroVariant } from '../components/ui.components';
import holographicBg from '../assets/trove_abstract_bg/2_adobe_firefly/fluid_holographic_2.jpg';

/**
 * AboutPage Component
 * 
 * Main About page that combines all About section components
 * Displays hero section, company information, team, and values
 * Supports both English and Vietnamese languages
 */
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SubpageHeroSection
        titleKey="about.hero.title"
        descriptionKey="about.hero.description"
        variant={SubpageHeroVariant.IMAGE_OVERLAY}
        backgroundImage={holographicBg}
        backgroundImageAlt="Trove - About Us Background"
        data-testid="about-hero-section"
      />
      
      {/* Company Information Section */}
      <AboutCompanySection />
      
      {/* Team Section */}
      <AboutTeamSection />
      
      {/* Values Section */}
      <AboutValuesSection />
    </div>
  );
};

export default AboutPage; 