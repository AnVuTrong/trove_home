import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-primary mb-6">
        {t('common.welcome')}
      </h1>
      <p className="mb-4">
        {t('app.description')}
      </p>
    </div>
  );
};

export default HomePage; 