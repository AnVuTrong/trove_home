import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import PricingHeroSection, { PricingHeroSectionClass } from '../PricingHeroSection.component';

// Mock i18next
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'pricing.hero.title': 'Investment Tools Pricing',
        'pricing.hero.description': 'Unlock the power of professional trading with our comprehensive suite of investment tools.',
      };
      return translations[key] || key;
    },
  }),
}));

describe('PricingHeroSection Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <I18nextProvider i18n={i18n}>
        <PricingHeroSection {...props} />
      </I18nextProvider>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('Investment Tools Pricing')).toBeInTheDocument();
  });

  it('displays the correct title and description', () => {
    renderComponent();
    
    expect(screen.getByText('Investment Tools Pricing')).toBeInTheDocument();
    expect(screen.getByText('Unlock the power of professional trading with our comprehensive suite of investment tools.')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-hero-class';
    renderComponent({ className: customClass });
    
    const section = screen.getByRole('region', { hidden: true });
    expect(section).toHaveClass(customClass);
  });

  it('uses custom translation keys when provided', () => {
    const customProps = {
      titleKey: 'custom.title',
      descriptionKey: 'custom.description'
    };
    
    renderComponent(customProps);
    
    expect(screen.getByText('custom.title')).toBeInTheDocument();
    expect(screen.getByText('custom.description')).toBeInTheDocument();
  });

  it('has correct HTML structure', () => {
    renderComponent();
    
    const section = screen.getByRole('region', { hidden: true });
    expect(section.tagName).toBe('SECTION');
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

describe('PricingHeroSectionClass', () => {
  it('returns correct CSS classes for section container', () => {
    const classes = PricingHeroSectionClass.getSectionContainerClasses();
    expect(classes).toContain('py-20');
    expect(classes).toContain('px-4');
    expect(classes).toContain('bg-gradient-to-br');
  });

  it('returns correct CSS classes for content container', () => {
    const classes = PricingHeroSectionClass.getContentContainerClasses();
    expect(classes).toContain('max-w-4xl');
    expect(classes).toContain('mx-auto');
    expect(classes).toContain('text-center');
  });

  it('returns correct CSS classes for title', () => {
    const classes = PricingHeroSectionClass.getTitleClasses();
    expect(classes).toContain('text-4xl');
    expect(classes).toContain('font-bold');
    expect(classes).toContain('mb-6');
  });

  it('returns correct CSS classes for description', () => {
    const classes = PricingHeroSectionClass.getDescriptionClasses();
    expect(classes).toContain('text-xl');
    expect(classes).toContain('leading-relaxed');
    expect(classes).toContain('max-w-3xl');
  });
}); 