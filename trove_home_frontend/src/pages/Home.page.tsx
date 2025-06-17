import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '../components/ui.components';
import troveLogoGreen from '../assets/trove_logo_v1/2_horizontal/2_horizontal_green_fit_svg.svg';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <HeroSection
        imageSrc={troveLogoGreen}
        imageAlt="Trove - Investment Tools Platform"
        header={t('app.title') as string}
        subheader={t('common.welcome') as string}
        paragraph={t('app.description') as string}
        fullScreen={true}
        data-testid="home-hero-section"
      />
    </div>
  );
};

export default HomePage; 