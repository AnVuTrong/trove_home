import React from 'react';
import { useTranslation } from 'react-i18next';
import TroveLogo from '../assets/trove_images/trove_green_text.png';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-8">
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <img src={TroveLogo} alt="Trove Logo" className="max-h-40 mb-8" />
        <h1 className="text-5xl font-bold text-primary mb-4">
          {t('navigation.about')}
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl text-center">
          {t('app.description')}
        </p>
      </section>

      <div className="prose max-w-none p-8">
        <h2 className="text-3xl font-bold text-primary mb-6">
          More About Us
        </h2>
        <p className="mb-4">
          We are dedicated to providing the best solutions for your needs. 
          Our team is passionate about technology and innovation, constantly striving to improve and deliver excellence.
        </p>
      </div>
    </div>
  );
};

export default AboutPage; 