import { 
  getTranslation, 
  getTranslationWithVars, 
  getCurrentLanguage, 
  changeLanguage 
} from './TranslationUtils.utils';

/**
 * Example function demonstrating translation outside of React components
 */
export const showTranslationExamples = (): void => {
  // Get current language
  const currentLang = getCurrentLanguage();
  console.log(`Current language: ${currentLang}`);

  // Basic translation
  const welcomeText = getTranslation('common.welcome');
  console.log(`Welcome message: ${welcomeText}`);

  // Translation with variables
  const counterText = getTranslationWithVars('demo.counter', { count: 5 });
  console.log(`Counter message: ${counterText}`);

  // Switch language example (uncomment to test)
  /*
  const newLang = currentLang === 'en' ? 'vi' : 'en';
  changeLanguage(newLang);
  console.log(`Language changed to: ${newLang}`);
  
  // See the same texts in the new language
  console.log(`Welcome message (${newLang}): ${getTranslation('common.welcome')}`);
  console.log(`Counter message (${newLang}): ${getTranslationWithVars('demo.counter', { count: 5 })}`);
  */
}; 