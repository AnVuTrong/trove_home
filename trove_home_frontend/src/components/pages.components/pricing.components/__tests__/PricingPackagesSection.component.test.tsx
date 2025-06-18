import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import PricingPackagesSection, { PricingPackagesSectionClass } from '../PricingPackagesSection.component';

// Mock i18next
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations: Record<string, any> = {
        'pricing.packages.title': 'Choose Your Plan',
        'pricing.packages.subtitle': 'All plans include our core features',
        'pricing.packages.starter.name': 'Starter',
        'pricing.packages.starter.price': '$29',
        'pricing.packages.starter.period': '/month',
        'pricing.packages.starter.description': 'Perfect for beginning investors',
        'pricing.packages.starter.popular': 'false',
        'pricing.packages.starter.features': ['Basic portfolio tracking', 'Market data access', 'Email support'],
        'pricing.packages.starter.button': 'Get Started',
        'pricing.packages.professional.name': 'Professional',
        'pricing.packages.professional.price': '$79',
        'pricing.packages.professional.period': '/month',
        'pricing.packages.professional.description': 'For serious traders',
        'pricing.packages.professional.popular': 'true',
        'pricing.packages.professional.features': ['Advanced analytics', 'Real-time data', 'Priority support'],
        'pricing.packages.professional.button': 'Go Professional',
        'pricing.packages.enterprise.name': 'Enterprise',
        'pricing.packages.enterprise.price': '$199',
        'pricing.packages.enterprise.period': '/month',
        'pricing.packages.enterprise.description': 'For institutions',
        'pricing.packages.enterprise.popular': 'false',
        'pricing.packages.enterprise.features': ['Everything in Professional', 'Multi-user accounts'],
        'pricing.packages.enterprise.button': 'Contact Sales',
        'pricing.packages.premium.name': 'Premium',
        'pricing.packages.premium.price': '$299',
        'pricing.packages.premium.period': '/month',
        'pricing.packages.premium.description': 'Ultimate trading experience',
        'pricing.packages.premium.popular': 'false',
        'pricing.packages.premium.features': ['Everything in Enterprise', 'AI-powered insights'],
        'pricing.packages.premium.button': 'Get Premium',
      };
      
      if (options?.returnObjects) {
        return translations[key] || [];
      }
      return translations[key] || key;
    },
  }),
}));

describe('PricingPackagesSection Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <I18nextProvider i18n={i18n}>
        <PricingPackagesSection {...props} />
      </I18nextProvider>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
  });

  it('displays all 4 pricing packages', () => {
    renderComponent();
    
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Professional')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  it('displays package prices correctly', () => {
    renderComponent();
    
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('$79')).toBeInTheDocument();
    expect(screen.getByText('$199')).toBeInTheDocument();
    expect(screen.getByText('$299')).toBeInTheDocument();
  });

  it('shows popular badge for professional package', () => {
    renderComponent();
    
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });

  it('displays feature lists for all packages', () => {
    renderComponent();
    
    expect(screen.getByText('Basic portfolio tracking')).toBeInTheDocument();
    expect(screen.getByText('Advanced analytics')).toBeInTheDocument();
    expect(screen.getByText('Everything in Professional')).toBeInTheDocument();
    expect(screen.getByText('Everything in Enterprise')).toBeInTheDocument();
  });

  it('renders action buttons for all packages', () => {
    renderComponent();
    
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Go Professional')).toBeInTheDocument();
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
    expect(screen.getByText('Get Premium')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-packages-class';
    renderComponent({ className: customClass });
    
    const section = screen.getByRole('region', { hidden: true });
    expect(section).toHaveClass(customClass);
  });

  it('handles empty or invalid features gracefully', () => {
    // Mock t function that returns invalid features
    const mockT = jest.fn((key: string, options?: any) => {
      if (key.includes('.features') && options?.returnObjects) {
        return null; // Invalid return
      }
      if (key.includes('.popular')) {
        return 'false';
      }
      return 'Test Value';
    });
    
    jest.doMock('react-i18next', () => ({
      ...jest.requireActual('react-i18next'),
      useTranslation: () => ({ t: mockT }),
    }));

    renderComponent();
    
    // Should show fallback text
    expect(screen.getAllByText('Features coming soon...')).toHaveLength(4);
  });
});

describe('PricingPackagesSectionClass', () => {
  it('returns correct CSS classes for different package states', () => {
    const regularCard = PricingPackagesSectionClass.getPackageCardClasses(false);
    const popularCard = PricingPackagesSectionClass.getPackageCardClasses(true);
    
    expect(regularCard).toContain('relative');
    expect(regularCard).toContain('bg-white');
    expect(popularCard).toContain('border-2');
    expect(popularCard).toContain('border-primary');
  });

  it('returns correct button classes for different package states', () => {
    const regularButton = PricingPackagesSectionClass.getPackageButtonClasses(false);
    const popularButton = PricingPackagesSectionClass.getPackageButtonClasses(true);
    
    expect(regularButton).toContain('bg-gray-900');
    expect(popularButton).toContain('bg-primary');
  });

  it('returns correct grid classes', () => {
    const gridClasses = PricingPackagesSectionClass.getPackagesGridClasses();
    expect(gridClasses).toContain('grid');
    expect(gridClasses).toContain('lg:grid-cols-4');
  });
}); 