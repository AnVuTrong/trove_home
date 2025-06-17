import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-primary dark:text-primary-dark mb-6">
        {t('app.title')}
      </h1>
      <p className="mb-4 text-text-DEFAULT dark:text-text-dark">
        {t('app.description')}
      </p>
    </div>
  );
};

export default HomePage; 