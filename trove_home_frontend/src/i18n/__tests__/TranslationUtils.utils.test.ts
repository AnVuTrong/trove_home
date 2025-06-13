import { translate } from '../TranslationUtils.utils';
import i18next from 'i18next';

// Helper to ensure getResource exists for tests
if (typeof (i18next as any).getResource !== 'function') {
  (i18next as any).getResource = () => undefined;
}

describe('translate helper', () => {
  it('returns default value when translation not found', () => {
    const result = translate('non.existent.key', 'Default Value');
    expect(result).toBe('Default Value');
  });

  it('returns translation when available', () => {
    // Mock i18next.t to return a translation
    const originalT = i18next.t;
    i18next.t = jest.fn().mockReturnValue('Translated');
    
    const result = translate('some.key', 'Default');
    expect(result).toBe('Translated');
    
    // Restore original function
    i18next.t = originalT;
  });

  it('returns default value when translation equals key', () => {
    // Mock i18next.t to return the key (indicating no translation found)
    const originalT = i18next.t;
    i18next.t = jest.fn().mockReturnValue('some.key');
    
    const result = translate('some.key', 'Default');
    expect(result).toBe('Default');
    
    // Restore original function
    i18next.t = originalT;
  });
}); 