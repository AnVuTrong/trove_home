import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// Hook for accessing translations within React components
export const useAppTranslation = () => {
  return useTranslation();
};

// Function to get simple translations for use outside React
export const getTranslation = (key: string): string => {
  try {
    // Access the loaded translations directly
    const translation = i18next.getResource(
      i18next.language, 
      'translation', 
      key
    );
    
    return translation || key;
  } catch (error) {
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

// Function to get current language
export const getCurrentLanguage = (): string => {
  return i18next.language;
};

// Function to change language
export const changeLanguage = (language: string): void => {
  i18next.changeLanguage(language);
};

// Function to check if current language is RTL
export const isRTL = (): boolean => {
  // Add RTL languages here if needed in the future
  const rtlLanguages: string[] = [];
  return rtlLanguages.includes(i18next.language);
}; 