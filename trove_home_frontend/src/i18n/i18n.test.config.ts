import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files directly for testing
import enTranslations from '../../public/locales/en/translation.json';
import viTranslations from '../../public/locales/vi/translation.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'vi'],
    
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: enTranslations,
      },
      vi: {
        translation: viTranslations,
      },
    },
  });

export default i18n; 