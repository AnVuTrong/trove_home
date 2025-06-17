import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../hero.components/HeroSection.component';
import { HeroSectionProps } from '../hero.components/HeroSection.types';

describe('HeroSection Component', () => {
  const defaultProps: HeroSectionProps = {
    imageSrc: '/test-image.jpg',
    imageAlt: 'Test image',
    header: 'Test Header',
    subheader: 'Test Subheader',
    paragraph: 'This is a test paragraph for the hero section component.',
    'data-testid': 'hero-section'
  };

  it('renders the component with all required props', () => {
    render(<HeroSection {...defaultProps} />);
    
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.getByText('Test Subheader')).toBeInTheDocument();
    expect(screen.getByText('This is a test paragraph for the hero section component.')).toBeInTheDocument();
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('renders without subheader when not provided', () => {
    const propsWithoutSubheader = { ...defaultProps };
    delete propsWithoutSubheader.subheader;
    
    render(<HeroSection {...propsWithoutSubheader} />);
    
    expect(screen.getByText('Test Header')).toBeInTheDocument();
    expect(screen.queryByText('Test Subheader')).not.toBeInTheDocument();
    expect(screen.getByText('This is a test paragraph for the hero section component.')).toBeInTheDocument();
  });

  it('uses default alt text when imageAlt is not provided', () => {
    const propsWithoutAlt = { ...defaultProps };
    delete propsWithoutAlt.imageAlt;
    
    render(<HeroSection {...propsWithoutAlt} />);
    
    expect(screen.getByAltText('Hero image')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClassName = 'custom-hero-class';
    
    render(<HeroSection {...defaultProps} className={customClassName} />);
    
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveClass(customClassName);
  });

  it('applies custom imageClassName when provided', () => {
    const customImageClassName = 'custom-image-class';
    
    render(<HeroSection {...defaultProps} imageClassName={customImageClassName} />);
    
    const image = screen.getByAltText('Test image');
    expect(image).toHaveClass(customImageClassName);
  });

  it('applies custom textClassName when provided', () => {
    const customTextClassName = 'custom-text-class';
    
    render(<HeroSection {...defaultProps} textClassName={customTextClassName} />);
    
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection.querySelector('.space-y-4')).toHaveClass(customTextClassName);
  });

  it('has correct image src', () => {
    render(<HeroSection {...defaultProps} />);
    
    const image = screen.getByAltText('Test image') as HTMLImageElement;
    expect(image.src).toContain('/test-image.jpg');
  });

  it('renders with proper semantic HTML structure', () => {
    render(<HeroSection {...defaultProps} />);
    
    // Check for semantic HTML elements
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
}); 