import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import PricingTestimonialsSection, { PricingTestimonialsSectionClass } from '../PricingTestimonialsSection.component';

// Mock i18next
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations: Record<string, any> = {
        'pricing.testimonials.title': 'What Our Customers Say',
        'pricing.testimonials.subtitle': 'Don\'t just take our word for it',
        'pricing.testimonials.items': [
          {
            name: 'Sarah Johnson',
            position: 'Portfolio Manager',
            company: 'Investment Partners LLC',
            testimonial: 'Trove\'s tools have completely transformed how I manage portfolios.',
            rating: 5
          },
          {
            name: 'Michael Chen',
            position: 'Day Trader',
            company: 'Independent',
            testimonial: 'The professional plan gives me everything I need for day trading.',
            rating: 5
          }
        ]
      };
      
      if (options?.returnObjects) {
        return translations[key] || [];
      }
      return translations[key] || key;
    },
  }),
}));

describe('PricingTestimonialsSection Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <I18nextProvider i18n={i18n}>
        <PricingTestimonialsSection {...props} />
      </I18nextProvider>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
  });

  it('displays section title and subtitle', () => {
    renderComponent();
    
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument();
    expect(screen.getByText('Don\'t just take our word for it')).toBeInTheDocument();
  });

  it('displays testimonials with customer information', () => {
    renderComponent();
    
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Manager')).toBeInTheDocument();
    expect(screen.getByText('Investment Partners LLC')).toBeInTheDocument();
    expect(screen.getByText('"Trove\'s tools have completely transformed how I manage portfolios."')).toBeInTheDocument();
    
    expect(screen.getByText('Michael Chen')).toBeInTheDocument();
    expect(screen.getByText('Day Trader')).toBeInTheDocument();
    expect(screen.getByText('Independent')).toBeInTheDocument();
    expect(screen.getByText('"The professional plan gives me everything I need for day trading."')).toBeInTheDocument();
  });

  it('displays fallback testimonial when no testimonials are loaded', () => {
    // Create a temporary mock that returns empty testimonials
    const originalMock = require('react-i18next').useTranslation;
    
    // Override the mock for this test
    (require('react-i18next') as any).useTranslation = jest.fn(() => ({
      t: (key: string, options?: any) => {
        const translations: Record<string, any> = {
          'pricing.testimonials.title': 'What Our Customers Say',
          'pricing.testimonials.subtitle': 'Don\'t just take our word for it',
          'pricing.testimonials.items': [] // Empty array to trigger fallback
        };
        
        if (options?.returnObjects) {
          return translations[key] || [];
        }
        return translations[key] || key;
      },
    }));

    try {
      renderComponent();
      
      expect(screen.getByText('Happy Customer')).toBeInTheDocument();
      expect(screen.getByText('Investor')).toBeInTheDocument();
      expect(screen.getByText('Trove User')).toBeInTheDocument();
    } finally {
      // Restore the original mock
      (require('react-i18next') as any).useTranslation = originalMock;
    }
  });

  it('displays star ratings for testimonials', () => {
    renderComponent();
    
    // Each testimonial has 5 stars, so we should have 10 stars total for 2 testimonials
    const starIcons = screen.getAllByRole('img', { hidden: true });
    expect(starIcons.length).toBeGreaterThanOrEqual(10);
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-testimonials-class';
    renderComponent({ className: customClass });
    
    const section = screen.getByRole('region', { hidden: true });
    expect(section).toHaveClass(customClass);
  });

  it('uses custom translation keys when provided', () => {
    const customProps = {
      titleKey: 'custom.testimonials.title',
      subtitleKey: 'custom.testimonials.subtitle'
    };
    
    renderComponent(customProps);
    
    expect(screen.getByText('custom.testimonials.title')).toBeInTheDocument();
    expect(screen.getByText('custom.testimonials.subtitle')).toBeInTheDocument();
  });
});

describe('PricingTestimonialsSectionClass', () => {
  it('returns correct CSS classes for section container', () => {
    const classes = PricingTestimonialsSectionClass.getSectionContainerClasses();
    expect(classes).toContain('py-20');
    expect(classes).toContain('bg-gray-50');
    expect(classes).toContain('dark:bg-background-surface_dark');
  });

  it('returns correct CSS classes for testimonials grid', () => {
    const classes = PricingTestimonialsSectionClass.getTestimonialsGridClasses();
    expect(classes).toContain('grid');
    expect(classes).toContain('lg:grid-cols-4');
    expect(classes).toContain('gap-8');
  });

  it('returns correct CSS classes for testimonial cards', () => {
    const classes = PricingTestimonialsSectionClass.getTestimonialCardClasses();
    expect(classes).toContain('p-0');
  });

  it('returns correct CSS classes for star icons', () => {
    const classes = PricingTestimonialsSectionClass.getStarIconClasses();
    expect(classes).toContain('w-5');
    expect(classes).toContain('h-5');
    expect(classes).toContain('text-yellow-400');
  });

  it('returns correct CSS classes for author information', () => {
    const nameClasses = PricingTestimonialsSectionClass.getAuthorNameClasses();
    const positionClasses = PricingTestimonialsSectionClass.getAuthorPositionClasses();
    const companyClasses = PricingTestimonialsSectionClass.getAuthorCompanyClasses();
    
    expect(nameClasses).toContain('font-semibold');
    expect(positionClasses).toContain('text-sm');
    expect(companyClasses).toContain('text-primary');
  });
}); 