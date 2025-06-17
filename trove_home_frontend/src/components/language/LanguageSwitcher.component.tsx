import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{t('language.switchLanguage')}:</span>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            i18n.language === 'en'
              ? 'bg-primary text-white'
              : 'bg-background-light hover:bg-background-surface_dark text-text-light dark:bg-background-dark dark:hover:bg-background-surface_dark dark:text-text-dark'
          }`}
          onClick={() => changeLanguage('en')}
        >
          {t('language.english')}
        </button>
        <button
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            i18n.language === 'vi'
              ? 'bg-primary text-white'
              : 'bg-background-light hover:bg-background-surface_dark text-text-light dark:bg-background-dark dark:hover:bg-background-surface_dark dark:text-text-dark'
          }`}
          onClick={() => changeLanguage('vi')}
        >
          {t('language.vietnamese')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 