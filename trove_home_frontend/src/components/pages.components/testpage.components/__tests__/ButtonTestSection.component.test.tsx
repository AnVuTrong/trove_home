import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonTestSection from '../ButtonTestSection.component';

// Mock the translation utilities
jest.mock('../../../../i18n/TranslationUtils.utils', () => ({
  useAppTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'componentTest.buttons.title': 'Button Components',
        'componentTest.buttons.primary': 'Primary',
        'componentTest.buttons.secondary': 'Secondary',
        'componentTest.buttons.danger': 'Danger',
        'componentTest.buttons.success': 'Success',
        'componentTest.buttons.outline': 'Outline',
        'componentTest.buttons.small': 'Small',
        'componentTest.buttons.large': 'Large',
        'componentTest.buttons.loading': 'Loading',
        'componentTest.buttons.disabled': 'Disabled',
      };
      return translations[key] || key;
    },
  }),
  translate: (key: string, fallback: string) => {
    const translations: Record<string, string> = {
      'common.loading': 'Loading...',
    };
    return translations[key] || fallback;
  },
}));

describe('ButtonTestSection', () => {
  const mockOnButtonClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button test section with correct title', () => {
    render(<ButtonTestSection onButtonClick={mockOnButtonClick} />);
    
    expect(screen.getByText('Button Components')).toBeInTheDocument();
  });

  it('renders all button variants', () => {
    render(<ButtonTestSection onButtonClick={mockOnButtonClick} />);
    
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
    expect(screen.getByText('Danger')).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Outline')).toBeInTheDocument();
    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
    // Check for loading state by looking for disabled button with loading content
    const loadingElements = screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Loading...') || false;
    });
    expect(loadingElements.length).toBeGreaterThan(0);
    expect(screen.getByText('Disabled')).toBeInTheDocument();
  });

  it('calls onButtonClick when clickable buttons are clicked', () => {
    render(<ButtonTestSection onButtonClick={mockOnButtonClick} />);
    
    const primaryButton = screen.getByText('Primary');
    fireEvent.click(primaryButton);
    
    expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
  });

  it('has correct structure and classes', () => {
    const { container } = render(<ButtonTestSection onButtonClick={mockOnButtonClick} />);
    
    const buttonsContainer = container.querySelector('.flex.flex-wrap.gap-4');
    expect(buttonsContainer).toBeInTheDocument();
  });
}); 