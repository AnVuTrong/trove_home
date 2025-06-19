import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import AboutValuesSection, { AboutValuesSectionClass } from '../AboutValuesSection.component';
import { AboutValuesSectionProps, CompanyValue } from '../AboutValuesSection.types';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

const mockCompanyValues: CompanyValue[] = [
  {
    id: 'test1',
    titleKey: 'about.values.innovation.title',
    descriptionKey: 'about.values.innovation.description',
    icon: '🚀'
  },
  {
    id: 'test2',
    titleKey: 'about.values.transparency.title',
    descriptionKey: 'about.values.transparency.description'
  }
];

describe('AboutValuesSection Component', () => {
  describe('Component Rendering', () => {
    it('should render values section with default props', () => {
      renderWithI18n(<AboutValuesSection />);
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
    });

    it('should render 4 company values by default', () => {
      renderWithI18n(<AboutValuesSection />);
      
      // Look for value titles specifically (using heading role)
      const valueTitles = screen.getAllByRole('heading', { level: 3 });
      expect(valueTitles).toHaveLength(4);
      
      // Check for specific value titles
      const innovationTitle = screen.getByRole('heading', { name: /Innovation|Đổi mới/i });
      const transparencyTitle = screen.getByRole('heading', { name: /Transparency|Minh bạch/i });
      const excellenceTitle = screen.getByRole('heading', { name: /^Excellence$|^Xuất sắc$/i });
      const accessibilityTitle = screen.getByRole('heading', { name: /Accessibility|Khả năng tiếp cận/i });
      
      expect(innovationTitle).toBeInTheDocument();
      expect(transparencyTitle).toBeInTheDocument();
      expect(excellenceTitle).toBeInTheDocument();
      expect(accessibilityTitle).toBeInTheDocument();
    });

    it('should render custom company values when provided', () => {
      const customProps: AboutValuesSectionProps = {
        companyValues: mockCompanyValues
      };
      
      renderWithI18n(<AboutValuesSection {...customProps} />);
      
      const valueCards = screen.getAllByText(/Innovation|Đổi mới|Transparency|Minh bạch/i);
      expect(valueCards.length).toBeGreaterThanOrEqual(2);
    });

    it('should apply custom className', () => {
      const customClassName = 'custom-values-class';
      const { container } = renderWithI18n(
        <AboutValuesSection className={customClassName} />
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveClass(customClassName);
    });
  });

  describe('AboutValuesSectionClass Utility', () => {
    it('should return correct CSS classes for section container', () => {
      const classes = AboutValuesSectionClass.getSectionContainerClasses();
      expect(classes).toContain('py-16');
      expect(classes).toContain('px-4');
      expect(classes).toContain('bg-white');
    });

    it('should return correct CSS classes for grid container', () => {
      const classes = AboutValuesSectionClass.getGridContainerClasses();
      expect(classes).toContain('grid');
      expect(classes).toContain('grid-cols-1');
      expect(classes).toContain('md:grid-cols-2');
      expect(classes).toContain('lg:grid-cols-4');
    });

    it('should return correct CSS classes for value card', () => {
      const classes = AboutValuesSectionClass.getValueCardClasses();
      expect(classes).toContain('text-center');
      expect(classes).toContain('p-6');
    });

    it('should return correct CSS classes for value icon', () => {
      const classes = AboutValuesSectionClass.getValueIconClasses();
      expect(classes).toContain('w-16');
      expect(classes).toContain('h-16');
      expect(classes).toContain('rounded-full');
      expect(classes).toContain('mx-auto');
    });

    it('should return correct icons for different value types', () => {
      expect(AboutValuesSectionClass.getValueIcon('about.values.innovation.title')).toBe('💡');
      expect(AboutValuesSectionClass.getValueIcon('about.values.transparency.title')).toBe('🔍');
      expect(AboutValuesSectionClass.getValueIcon('about.values.excellence.title')).toBe('⭐');
      expect(AboutValuesSectionClass.getValueIcon('about.values.accessibility.title')).toBe('🌐');
      expect(AboutValuesSectionClass.getValueIcon('unknown.value')).toBe('🎯');
    });
  });

  describe('Value Icons and Content', () => {
    it('should display default icons for each value', () => {
      renderWithI18n(<AboutValuesSection />);
      
      // Check for emoji icons in the document
      const icons = screen.getAllByText(/💡|🔍|⭐|🌐/);
      expect(icons).toHaveLength(4);
    });

    it('should display custom icons when provided', () => {
      const customProps: AboutValuesSectionProps = {
        companyValues: mockCompanyValues
      };
      
      renderWithI18n(<AboutValuesSection {...customProps} />);
      
      const customIcon = screen.getByText('🚀');
      expect(customIcon).toBeInTheDocument();
    });

    it('should display value descriptions', () => {
      renderWithI18n(<AboutValuesSection />);
      
      const innovationDesc = screen.getByText(/constantly push the boundaries/i);
      expect(innovationDesc).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      renderWithI18n(<AboutValuesSection />);
      
      const mainTitle = screen.getByRole('heading', { level: 2 });
      const valueTitles = screen.getAllByRole('heading', { level: 3 });
      
      expect(mainTitle).toBeInTheDocument();
      expect(valueTitles).toHaveLength(4);
    });

    it('should have semantic section element', () => {
      const { container } = renderWithI18n(<AboutValuesSection />);
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive grid classes', () => {
      const { container } = renderWithI18n(<AboutValuesSection />);
      
      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toHaveClass('grid-cols-1');
      expect(gridContainer).toHaveClass('md:grid-cols-2');
      expect(gridContainer).toHaveClass('lg:grid-cols-4');
    });

    it('should have responsive text and spacing', () => {
      const titleClasses = AboutValuesSectionClass.getTitleClasses();
      expect(titleClasses).toContain('text-3xl');
      expect(titleClasses).toContain('md:text-4xl');
    });
  });

  describe('Internationalization', () => {
    it('should display content in English by default', () => {
      renderWithI18n(<AboutValuesSection />);
      
      const valuesTitle = screen.getByText(/our values/i);
      expect(valuesTitle).toBeInTheDocument();
    });
  });
}); 