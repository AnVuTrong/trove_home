import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import AboutCompanySection, { AboutCompanySectionClass } from '../AboutCompanySection.component';
import { AboutCompanySectionProps } from '../AboutCompanySection.types';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('AboutCompanySection Component', () => {
  describe('Component Rendering', () => {
    it('should render company section with default props', () => {
      renderWithI18n(<AboutCompanySection />);
      
      const title = screen.getByRole('heading', { level: 2 });
      const description = screen.getByText(/cutting-edge investment platform/i);
      
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });

    it('should render placeholder section by default', () => {
      renderWithI18n(<AboutCompanySection />);
      
      const placeholderTitle = screen.getByText('Company Information Section');
      const placeholderText = screen.getByText(/this section is reserved/i);
      
      expect(placeholderTitle).toBeInTheDocument();
      expect(placeholderText).toBeInTheDocument();
    });

    it('should hide placeholder when showPlaceholder is false', () => {
      const props: AboutCompanySectionProps = {
        showPlaceholder: false
      };
      
      renderWithI18n(<AboutCompanySection {...props} />);
      
      const placeholderTitle = screen.queryByText('Company Information Section');
      expect(placeholderTitle).not.toBeInTheDocument();
    });

    it('should render with custom translation keys', () => {
      const customProps: AboutCompanySectionProps = {
        titleKey: 'app.title',
        descriptionKey: 'app.description',
        placeholderKey: 'app.description'
      };
      
      renderWithI18n(<AboutCompanySection {...customProps} />);
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const customClassName = 'custom-company-class';
      const { container } = renderWithI18n(
        <AboutCompanySection className={customClassName} />
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveClass(customClassName);
    });
  });

  describe('AboutCompanySectionClass Utility', () => {
    it('should return correct CSS classes for section container', () => {
      const classes = AboutCompanySectionClass.getSectionContainerClasses();
      expect(classes).toContain('py-16');
      expect(classes).toContain('px-4');
      expect(classes).toContain('bg-white');
    });

    it('should return correct CSS classes for content container', () => {
      const classes = AboutCompanySectionClass.getContentContainerClasses();
      expect(classes).toContain('max-w-6xl');
      expect(classes).toContain('mx-auto');
    });

    it('should return correct CSS classes for title', () => {
      const classes = AboutCompanySectionClass.getTitleClasses();
      expect(classes).toContain('text-3xl');
      expect(classes).toContain('md:text-4xl');
      expect(classes).toContain('font-bold');
      expect(classes).toContain('text-primary');
    });

    it('should return correct CSS classes for description', () => {
      const classes = AboutCompanySectionClass.getDescriptionClasses();
      expect(classes).toContain('text-lg');
      expect(classes).toContain('leading-relaxed');
      expect(classes).toContain('text-center');
    });

    it('should return correct CSS classes for placeholder container', () => {
      const classes = AboutCompanySectionClass.getPlaceholderContainerClasses();
      expect(classes).toContain('bg-gray-50');
      expect(classes).toContain('p-8');
      expect(classes).toContain('rounded-lg');
      expect(classes).toContain('border-2');
      expect(classes).toContain('border-dashed');
    });
  });

  describe('Placeholder Functionality', () => {
    it('should show placeholder content when enabled', () => {
      renderWithI18n(<AboutCompanySection showPlaceholder={true} />);
      
      const placeholder = screen.getByText(/this section is reserved/i);
      expect(placeholder).toBeInTheDocument();
    });

    it('should have proper styling for placeholder', () => {
      const { container } = renderWithI18n(
        <AboutCompanySection showPlaceholder={true} />
      );
      
      const placeholderContainer = container.querySelector('.border-dashed');
      expect(placeholderContainer).toBeInTheDocument();
      expect(placeholderContainer).toHaveClass('bg-gray-50');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      renderWithI18n(<AboutCompanySection />);
      
      const mainTitle = screen.getByRole('heading', { level: 2 });
      const placeholderTitle = screen.getByRole('heading', { level: 3 });
      
      expect(mainTitle).toBeInTheDocument();
      expect(placeholderTitle).toBeInTheDocument();
    });

    it('should have semantic section element', () => {
      const { container } = renderWithI18n(<AboutCompanySection />);
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Internationalization', () => {
    it('should display content in English by default', () => {
      renderWithI18n(<AboutCompanySection />);
      
      const description = screen.getByText(/cutting-edge investment platform/i);
      expect(description).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive text sizes', () => {
      const titleClasses = AboutCompanySectionClass.getTitleClasses();
      expect(titleClasses).toContain('text-3xl');
      expect(titleClasses).toContain('md:text-4xl');
    });

    it('should have responsive container width', () => {
      const containerClasses = AboutCompanySectionClass.getContentContainerClasses();
      expect(containerClasses).toContain('max-w-6xl');
    });
  });
}); 