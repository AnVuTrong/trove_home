import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import AboutPage from '../../../../pages/About.page';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

describe('About Page Integration', () => {
  describe('Component Rendering', () => {
    it('should render About page with all sections', () => {
      renderWithProviders(<AboutPage />);
      
      // Check for main headings
      const heroTitle = screen.getByRole('heading', { level: 1 });
      expect(heroTitle).toBeInTheDocument();
      
      // Check for section headings
      const sectionHeadings = screen.getAllByRole('heading', { level: 2 });
      expect(sectionHeadings).toHaveLength(3); // Company, Team, Values
    });

    it('should display hero section content', () => {
      renderWithProviders(<AboutPage />);
      
      const heroDescription = screen.getByText(/we are dedicated to revolutionizing/i);
      expect(heroDescription).toBeInTheDocument();
    });

    it('should display company section with placeholder', () => {
      renderWithProviders(<AboutPage />);
      
      const companyDescription = screen.getByText(/cutting-edge investment platform/i);
      const placeholder = screen.getByText(/this section is reserved/i);
      
      expect(companyDescription).toBeInTheDocument();
      expect(placeholder).toBeInTheDocument();
    });

    it('should display team section with 4 members', () => {
      renderWithProviders(<AboutPage />);
      
      // Look for team member names specifically (h3 headings)
      const teamMemberHeadings = screen.getAllByRole('heading', { level: 3 });
      const teamMemberNames = teamMemberHeadings.filter(heading => 
        heading.textContent?.match(/team member \d|thành viên \d/i)
      );
      expect(teamMemberNames).toHaveLength(4);
    });

    it('should display values section with 4 values', () => {
      renderWithProviders(<AboutPage />);
      
      // Use heading role to target specific value titles
      const innovationTitle = screen.getByRole('heading', { name: /innovation/i });
      const transparencyTitle = screen.getByRole('heading', { name: /transparency/i });
      const excellenceTitle = screen.getByRole('heading', { name: /^excellence$/i });
      const accessibilityTitle = screen.getByRole('heading', { name: /accessibility/i });
      
      expect(innovationTitle).toBeInTheDocument();
      expect(transparencyTitle).toBeInTheDocument();
      expect(excellenceTitle).toBeInTheDocument();
      expect(accessibilityTitle).toBeInTheDocument();
    });
  });

  describe('Internationalization', () => {
    it('should support language switching', async () => {
      renderWithProviders(<AboutPage />);
      
      // Should show English by default - use heading role for specificity
      expect(screen.getByRole('heading', { name: /about trove/i })).toBeInTheDocument();
      
      // Switch to Vietnamese
      await i18n.changeLanguage('vi');
      
      // Re-render to see changes
      renderWithProviders(<AboutPage />);
      
      // Should show Vietnamese text
      expect(screen.getByRole('heading', { name: /giới thiệu trove/i })).toBeInTheDocument();
    });
  });
}); 