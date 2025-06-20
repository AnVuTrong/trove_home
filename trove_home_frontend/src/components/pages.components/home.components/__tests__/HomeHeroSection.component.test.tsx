import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import HomeHeroSection from '../HomeHeroSection.component';
import { ThemeProvider } from '../../../../contexts/ThemeContext.context';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{component}</ThemeProvider>
    </I18nextProvider>
  );
};

describe('HomeHeroSection Component', () => {
  it('should render default hero content', () => {
    renderWithI18n(<HomeHeroSection />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('should change content when option button is clicked', () => {
    renderWithI18n(<HomeHeroSection />);

    const realEstateBtn = screen.getByTestId('option-btn-realEstate');
    fireEvent.click(realEstateBtn);

    const updatedDescription = screen.getByText(i18n.t('home.investments.realEstate.description') as string);
    expect(updatedDescription).toBeInTheDocument();
  });
}); 