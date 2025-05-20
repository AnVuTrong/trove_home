import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext.context';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' 
            ? 'bg-primary text-white' 
            : 'bg-secondary text-text-secondary hover:bg-primary-light hover:text-white'
        } transition-colors duration-200`}
        title={t('language.english')}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('vi')}
        className={`px-2 py-1 rounded ${
          language === 'vi' 
            ? 'bg-primary text-white' 
            : 'bg-secondary text-text-secondary hover:bg-primary-light hover:text-white'
        } transition-colors duration-200`}
        title={t('language.vietnamese')}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher; 