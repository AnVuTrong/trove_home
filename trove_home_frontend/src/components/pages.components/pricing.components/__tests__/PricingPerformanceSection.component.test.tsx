import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import PricingPerformanceSection, { PricingPerformanceSectionClass } from '../PricingPerformanceSection.component';

// Mock i18next
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations: Record<string, any> = {
        'pricing.performance.title': 'Proven Track Record',
        'pricing.performance.subtitle': 'Our investment tools have consistently delivered results',
        'pricing.performance.chartTitle': 'Portfolio Performance Over Time',
        'pricing.performance.chartDescription': 'This chart shows the average performance improvement',
        'pricing.performance.metrics': {
          roi: {
            title: 'Average ROI Improvement',
            value: '32%',
            description: 'Users see average improvement in returns'
          },
          accuracy: {
            title: 'Prediction Accuracy',
            value: '87%',
            description: 'Our AI models\' prediction accuracy'
          },
          users: {
            title: 'Active Users',
            value: '50K+',
            description: 'Professional investors trust our platform'
          },
          satisfaction: {
            title: 'Customer Satisfaction',
            value: '4.9/5',
            description: 'Based on user reviews and feedback'
          }
        }
      };
      
      if (options?.returnObjects) {
        return translations[key] || {};
      }
      return translations[key] || key;
    },
  }),
}));

describe('PricingPerformanceSection Component', () => {
  const renderComponent = (props = {}) => {
    return render(
      <I18nextProvider i18n={i18n}>
        <PricingPerformanceSection {...props} />
      </I18nextProvider>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('Proven Track Record')).toBeInTheDocument();
  });

  it('displays section title and subtitle', () => {
    renderComponent();
    
    expect(screen.getByText('Proven Track Record')).toBeInTheDocument();
    expect(screen.getByText('Our investment tools have consistently delivered results')).toBeInTheDocument();
  });

  it('displays performance metrics', () => {
    renderComponent();
    
    expect(screen.getByText('32%')).toBeInTheDocument();
    expect(screen.getByText('Average ROI Improvement')).toBeInTheDocument();
    expect(screen.getByText('Users see average improvement in returns')).toBeInTheDocument();
    
    expect(screen.getByText('87%')).toBeInTheDocument();
    expect(screen.getByText('Prediction Accuracy')).toBeInTheDocument();
    expect(screen.getByText('Our AI models\' prediction accuracy')).toBeInTheDocument();
    
    expect(screen.getByText('50K+')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('Professional investors trust our platform')).toBeInTheDocument();
    
    expect(screen.getByText('4.9/5')).toBeInTheDocument();
    expect(screen.getByText('Customer Satisfaction')).toBeInTheDocument();
    expect(screen.getByText('Based on user reviews and feedback')).toBeInTheDocument();
  });

  it('displays chart section', () => {
    renderComponent();
    
    expect(screen.getByText('Portfolio Performance Over Time')).toBeInTheDocument();
    expect(screen.getByText('This chart shows the average performance improvement')).toBeInTheDocument();
  });

  it('renders chart legend', () => {
    renderComponent();
    
    expect(screen.getByText('Trove Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Market Benchmark')).toBeInTheDocument();
  });

  it('renders SVG chart with correct elements', () => {
    renderComponent();
    
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toBe('svg');
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-performance-class';
    renderComponent({ className: customClass });
    
    const section = screen.getByRole('region', { hidden: true });
    expect(section).toHaveClass(customClass);
  });

  it('uses custom translation keys when provided', () => {
    const customProps = {
      titleKey: 'custom.performance.title',
      subtitleKey: 'custom.performance.subtitle'
    };
    
    renderComponent(customProps);
    
    expect(screen.getByText('custom.performance.title')).toBeInTheDocument();
    expect(screen.getByText('custom.performance.subtitle')).toBeInTheDocument();
  });
});

describe('PricingPerformanceSectionClass', () => {
  it('returns correct CSS classes for section container', () => {
    const classes = PricingPerformanceSectionClass.getSectionContainerClasses();
    expect(classes).toContain('py-20');
    expect(classes).toContain('bg-white');
    expect(classes).toContain('dark:bg-background-dark');
  });

  it('returns correct CSS classes for metrics grid', () => {
    const classes = PricingPerformanceSectionClass.getMetricsGridClasses();
    expect(classes).toContain('grid');
    expect(classes).toContain('lg:grid-cols-4');
    expect(classes).toContain('gap-8');
    expect(classes).toContain('mb-16');
  });

  it('returns correct CSS classes for metric cards', () => {
    const classes = PricingPerformanceSectionClass.getMetricCardClasses();
    expect(classes).toContain('text-center');
    expect(classes).toContain('p-8');
    expect(classes).toContain('bg-gradient-to-br');
    expect(classes).toContain('rounded-xl');
  });

  it('returns correct CSS classes for metric values', () => {
    const classes = PricingPerformanceSectionClass.getMetricValueClasses();
    expect(classes).toContain('text-4xl');
    expect(classes).toContain('font-bold');
    expect(classes).toContain('text-primary');
  });

  it('returns correct CSS classes for chart container', () => {
    const classes = PricingPerformanceSectionClass.getChartContainerClasses();
    expect(classes).toContain('bg-gray-50');
    expect(classes).toContain('dark:bg-background-surface_dark');
    expect(classes).toContain('rounded-xl');
    expect(classes).toContain('p-8');
  });

  it('returns correct CSS classes for chart', () => {
    const classes = PricingPerformanceSectionClass.getChartClasses();
    expect(classes).toContain('relative');
    expect(classes).toContain('h-80');
    expect(classes).toContain('bg-white');
    expect(classes).toContain('dark:bg-background-dark');
    expect(classes).toContain('rounded-lg');
  });
}); 