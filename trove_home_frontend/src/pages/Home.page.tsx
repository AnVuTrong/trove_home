import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '../components/ui.components';
import fluidHolograph from '../assets/trove_abstract_bg/2_adobe_firefly/fluid_holographic.jpg';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <HeroSection
        imageSrc={fluidHolograph}
        imageAlt="Trove - Investment Tools Platform"
        header={t('app.title') as string}
        subheader={t('common.welcome') as string}
        paragraph={t('app.description') as string}
        imageClassName="blur-none"
        data-testid="home-hero-section"
      />
    </div>
  );
};

export default HomePage; 