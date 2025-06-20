import React from 'react';
import {
  AboutCompanySection,
  AboutTeamSection,
  AboutValuesSection
} from '../components/pages.components/about.components';
import { SubpageHeroSection, SubpageHeroVariant } from '../components/ui.components';
import holographicBgDark from '../assets/trove_abstract_bg/dark/green_fluid_holographic_2_dark.jpg';
import holographicBgLight from '../assets/trove_abstract_bg/light/green_fluid_holographic_light_2.png';
import ThemeContext from '../contexts/ThemeContext.context';
import { useContext } from 'react';

/**
 * AboutPage Component
 * 
 * Main About page that combines all About section components
 * Displays hero section, company information, team, and values
 * Supports both English and Vietnamese languages
 */
const AboutPage: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.isDarkMode ?? false;

  const holographicBg = isDarkMode ? holographicBgDark : holographicBgLight;

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