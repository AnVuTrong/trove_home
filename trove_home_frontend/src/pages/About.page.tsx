import React from 'react';
import {
  AboutHeroSection,
  AboutCompanySection,
  AboutTeamSection,
  AboutValuesSection
} from '../components/pages.components/about.components';

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
      <AboutHeroSection />
      
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