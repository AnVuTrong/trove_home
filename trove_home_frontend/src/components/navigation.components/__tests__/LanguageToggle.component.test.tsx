import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageToggle from '../LanguageSwitcher.components/LanguageToggle.component';
import { LanguageProvider } from '../../../contexts/LanguageContext.context';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n/i18n.config';

// Mock the useLanguage hook for controlled testing
const mockSetLanguage = jest.fn();
const mockLanguageContext = {
  language: 'en' as const,
  setLanguage: mockSetLanguage,
};

jest.mock('../../../contexts/LanguageContext.context', () => ({
  ...jest.requireActual('../../../contexts/LanguageContext.context'),
  useLanguage: () => mockLanguageContext,
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        {component}
      </LanguageProvider>
    </I18nextProvider>
  );
};

describe('LanguageToggle Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLanguageContext.language = 'en';
  });

  describe('Rendering', () => {
    test('renders language toggle with default props', () => {
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('aria-checked', 'false'); // English (false/left)
    });

    test('renders with custom size', () => {
      renderWithProviders(<LanguageToggle size="lg" />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toBeInTheDocument();
    });

    test('renders with custom variant', () => {
      renderWithProviders(<LanguageToggle variant="success" />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toBeInTheDocument();
    });

    test('renders with custom test id', () => {
      renderWithProviders(<LanguageToggle data-testid="custom-language-toggle" />);
      
      const toggle = screen.getByTestId('custom-language-toggle');
      expect(toggle).toBeInTheDocument();
    });

    test('renders with icons by default', () => {
      renderWithProviders(<LanguageToggle />);
      
      expect(screen.getByText('EN')).toBeInTheDocument();
      expect(screen.getByText('VI')).toBeInTheDocument();
    });

    test('hides icons when showIcons is false', () => {
      renderWithProviders(<LanguageToggle showIcons={false} />);
      
      expect(screen.queryByText('EN')).not.toBeInTheDocument();
      expect(screen.queryByText('VI')).not.toBeInTheDocument();
    });

    test('shows label when showLabel is true', () => {
      renderWithProviders(<LanguageToggle showLabel={true} />);
      
      expect(screen.getByText('Language')).toBeInTheDocument();
    });

    test('hides label by default', () => {
      renderWithProviders(<LanguageToggle />);
      
      expect(screen.queryByText('Language')).not.toBeInTheDocument();
    });
  });

  describe('Language State', () => {
    test('shows English as selected when language is "en"', () => {
      mockLanguageContext.language = 'en';
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

    test('shows Vietnamese as selected when language is "vi"', () => {
      mockLanguageContext.language = 'vi';
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('Interactions', () => {
    test('calls setLanguage with "vi" when toggling from English to Vietnamese', () => {
      mockLanguageContext.language = 'en';
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      fireEvent.click(toggle);
      
      expect(mockSetLanguage).toHaveBeenCalledWith('vi');
      expect(mockSetLanguage).toHaveBeenCalledTimes(1);
    });

    test('calls setLanguage with "en" when toggling from Vietnamese to English', () => {
      mockLanguageContext.language = 'vi';
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      fireEvent.click(toggle);
      
      expect(mockSetLanguage).toHaveBeenCalledWith('en');
      expect(mockSetLanguage).toHaveBeenCalledTimes(1);
    });

    test('handles keyboard navigation with Enter key', () => {
      mockLanguageContext.language = 'en';
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      fireEvent.keyDown(toggle, { key: 'Enter' });
      
      expect(mockSetLanguage).toHaveBeenCalledWith('vi');
    });

    test('handles keyboard navigation with Space key', () => {
      mockLanguageContext.language = 'en';
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      fireEvent.keyDown(toggle, { key: ' ' });
      
      expect(mockSetLanguage).toHaveBeenCalledWith('vi');
    });
  });

  describe('Custom Props', () => {
    test('applies custom className', () => {
      renderWithProviders(<LanguageToggle className="custom-class" />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toHaveClass('custom-class');
    });

    test('uses custom label', () => {
      renderWithProviders(<LanguageToggle showLabel={true} label="Choose Language" />);
      
      expect(screen.getByText('Choose Language')).toBeInTheDocument();
    });

    test('uses custom left and right labels when shown', () => {
      renderWithProviders(
        <LanguageToggle 
          showLabel={true} 
          leftLabel="English" 
          rightLabel="Vietnamese" 
        />
      );
      
      expect(screen.getByText('English')).toBeInTheDocument();
      expect(screen.getByText('Vietnamese')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper ARIA attributes', () => {
      renderWithProviders(<LanguageToggle showLabel={true} />);
      
      const toggle = screen.getByTestId('language-toggle');
      expect(toggle).toHaveAttribute('role', 'switch');
      expect(toggle).toHaveAttribute('aria-checked');
      expect(toggle).toHaveAttribute('aria-label', 'Language');
    });

    test('is focusable', () => {
      renderWithProviders(<LanguageToggle />);
      
      const toggle = screen.getByTestId('language-toggle');
      toggle.focus();
      expect(toggle).toHaveFocus();
    });
  });
}); 