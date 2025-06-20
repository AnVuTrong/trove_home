import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../Login.page';
import ThemeContext from '../../contexts/ThemeContext.context';

describe('LoginPage', () => {
  const renderWithTheme = (isDarkMode: boolean) => {
    const contextValue = {
      isDarkMode,
      toggleTheme: jest.fn(),
      setTheme: jest.fn(),
    } as any;

    render(
      <ThemeContext.Provider value={contextValue}>
        <LoginPage />
      </ThemeContext.Provider>
    );
  };

  it('renders the dark theme background image when dark mode is enabled', () => {
    renderWithTheme(true);
    const image = screen.getByAltText('Trove authentication background') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('green_fluid_holographic_dark');
  });

  it('renders the light theme background image when dark mode is disabled', () => {
    renderWithTheme(false);
    const image = screen.getByAltText('Trove authentication background') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('green_fluid_holographic_light');
  });
}); 