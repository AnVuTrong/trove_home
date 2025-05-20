import React from 'react';
import { useTranslation } from 'react-i18next';
import TranslationDemo from '../components/demo/TranslationDemo.component';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold text-primary mb-6">
          {t('navigation.about')}
        </h1>
        <p className="mb-4">
          {t('app.description')}
        </p>
      </div>
      
      <div className="mt-8">
        <TranslationDemo />
      </div>
    </div>
  );
};

export default AboutPage; 