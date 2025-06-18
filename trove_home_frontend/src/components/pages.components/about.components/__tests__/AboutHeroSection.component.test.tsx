import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import AboutHeroSection, { AboutHeroSectionClass } from '../AboutHeroSection.component';
import { AboutHeroSectionProps } from '../AboutHeroSection.types';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('AboutHeroSection Component', () => {
  describe('Component Rendering', () => {
    it('should render hero section with default props', () => {
      renderWithI18n(<AboutHeroSection />);
      
      const title = screen.getByRole('heading', { level: 1 });
      const description = screen.getByText(/we are dedicated to revolutionizing/i);
      
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });

    it('should render with custom translation keys', () => {
      const customProps: AboutHeroSectionProps = {
        titleKey: 'app.title',
        descriptionKey: 'app.description'
      };
      
      renderWithI18n(<AboutHeroSection {...customProps} />);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const customClassName = 'custom-hero-class';
      const { container } = renderWithI18n(
        <AboutHeroSection className={customClassName} />
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveClass(customClassName);
    });

    it('should render overlay and content container', () => {
      const { container } = renderWithI18n(<AboutHeroSection />);
      
      const overlay = container.querySelector('div[class*="absolute"]');
      const contentContainer = container.querySelector('div[class*="relative"][class*="z-10"]');
      
      expect(overlay).toBeInTheDocument();
      expect(contentContainer).toBeInTheDocument();
    });

    it('should have background image style applied', () => {
      const { container } = renderWithI18n(<AboutHeroSection />);
      
      const section = container.querySelector('section');
      expect(section).toHaveAttribute('style');
      expect(section?.getAttribute('style')).toContain('background-image');
    });
  });

  describe('AboutHeroSectionClass Utility', () => {
    it('should return correct CSS classes for hero container', () => {
      const classes = AboutHeroSectionClass.getHeroContainerClasses();
      expect(classes).toContain('min-h-[60vh]');
      expect(classes).toContain('flex');
      expect(classes).toContain('flex-col');
      expect(classes).toContain('items-center');
      expect(classes).toContain('justify-center');
      expect(classes).toContain('relative');
      expect(classes).toContain('bg-cover');
    });

    it('should return correct CSS classes for overlay', () => {
      const classes = AboutHeroSectionClass.getOverlayClasses();
      expect(classes).toContain('absolute');
      expect(classes).toContain('inset-0');
      expect(classes).toContain('bg-gradient-to-br');
    });

    it('should return correct CSS classes for content container', () => {
      const classes = AboutHeroSectionClass.getContentContainerClasses();
      expect(classes).toContain('relative');
      expect(classes).toContain('z-10');
      expect(classes).toContain('text-center');
    });

    it('should return correct CSS classes for title', () => {
      const classes = AboutHeroSectionClass.getTitleClasses();
      expect(classes).toContain('text-4xl');
      expect(classes).toContain('md:text-6xl');
      expect(classes).toContain('font-bold');
      expect(classes).toContain('text-white');
      expect(classes).toContain('drop-shadow-lg');
    });

    it('should return correct CSS classes for description', () => {
      const classes = AboutHeroSectionClass.getDescriptionClasses();
      expect(classes).toContain('text-lg');
      expect(classes).toContain('md:text-xl');
      expect(classes).toContain('text-white/95');
      expect(classes).toContain('max-w-3xl');
      expect(classes).toContain('drop-shadow-md');
    });

    it('should return background style with image URL', () => {
      const style = AboutHeroSectionClass.getBackgroundStyle();
      expect(style).toHaveProperty('backgroundImage');
      expect(style.backgroundImage).toContain('url(');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      renderWithI18n(<AboutHeroSection />);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
    });

    it('should have semantic section element', () => {
      const { container } = renderWithI18n(<AboutHeroSection />);
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Internationalization', () => {
    it('should display content in English by default', () => {
      renderWithI18n(<AboutHeroSection />);
      
      const description = screen.getByText(/we are dedicated to revolutionizing/i);
      expect(description).toBeInTheDocument();
    });
  });
}); 