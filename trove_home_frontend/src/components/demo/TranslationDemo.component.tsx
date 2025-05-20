import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language/LanguageSwitcher.component';

const TranslationDemo: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{t('common.welcome')}</h2>
      
      <div className="mb-6">
        <LanguageSwitcher />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{t('language.switchLanguage')} Demo</h3>
        
        {/* Basic translations */}
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-medium mb-2">Basic Translations:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('navigation.home')}</li>
            <li>{t('navigation.about')}</li>
            <li>{t('navigation.contact')}</li>
          </ul>
        </div>
        
        {/* Translations with variables */}
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-medium mb-2">Translations with variables:</h4>
          <p>
            {t('demo.counter', { count })}
          </p>
          <button 
            onClick={() => setCount(count + 1)}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {t('demo.increment')}
          </button>
        </div>
        
        {/* Current language */}
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-medium mb-2">Current language info:</h4>
          <p>
            {t('demo.currentLanguage', { language: i18n.language })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranslationDemo; 