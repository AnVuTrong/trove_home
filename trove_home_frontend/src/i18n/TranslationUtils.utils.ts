import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// Hook for accessing translations within React components
export const useAppTranslation = () => {
  return useTranslation();
};

// Function to get simple translations for use outside React
export const getTranslation = (key: string): string => {
  try {
    // Check if i18next is properly initialized and has getResource method
    if (!i18next || typeof i18next.getResource !== 'function') {
      // Fallback: try to get translation using t function if available
      if (i18next && typeof i18next.t === 'function') {
        return i18next.t(key);
      }
      return key;
    }

    // Access the loaded translations directly
    const translation = i18next.getResource(
      i18next.language, 
      'translation', 
      key
    );
    
    return translation || key;
  } catch (error) {
    // In test environment, suppress console.error and return key
    if (process.env.NODE_ENV === 'test') {
      return key;
    }
    console.error(`Translation error for key: ${key}`, error);
    return key;
  }
};

// Function to interpolate variables into translation
export const formatWithVars = (text: string, vars: Record<string, any>): string => {
  return Object.entries(vars).reduce((result, [varName, value]) => {
    // Replace all occurrences of {{varName}} with the variable value
    const pattern = new RegExp(`{{${varName}}}`, 'g');
    return result.replace(pattern, String(value));
  }, text);
};

// Combined function that gets a translation and interpolates variables
export const getTranslationWithVars = (key: string, vars: Record<string, any>): string => {
  const translation = getTranslation(key);
  return formatWithVars(translation, vars);
};

// NEW: Safe translate helper
export const translate = (key: string, defaultValue: string): string => {
  try {
    // Try to get translation using i18next.t if available
    if (i18next && typeof i18next.t === 'function') {
      const translated = i18next.t(key);
      return translated && translated !== key ? translated : defaultValue;
    }
    
    // Fallback to getTranslation
    const translated = getTranslation(key);
    return translated && translated !== key ? translated : defaultValue;
  } catch (error) {
    // In test environment, return default value silently
    if (process.env.NODE_ENV === 'test') {
      return defaultValue;
    }
    console.error(`Translation error for key: ${key}`, error);
    return defaultValue;
  }
};

// Function to get current language
export const getCurrentLanguage = (): string => {
  return i18next?.language || 'en';
};

// Function to change language
export const changeLanguage = (language: string): void => {
  if (i18next && typeof i18next.changeLanguage === 'function') {
    i18next.changeLanguage(language);
  }
};

// Function to check if current language is RTL
export const isRTL = (): boolean => {
  // Add RTL languages here if needed in the future
  const rtlLanguages: string[] = [];
  return rtlLanguages.includes(i18next?.language || 'en');
}; 