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

  describe('Full-screen mode', () => {
    const fullScreenProps: HeroSectionProps = {
      ...defaultProps,
      fullScreen: true
    };

    it('renders in full-screen mode when fullScreen prop is true', () => {
      render(<HeroSection {...fullScreenProps} />);
      
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).toHaveClass('relative', 'w-full', 'h-screen', 'overflow-hidden');
    });

    it('applies full-screen styling to image container', () => {
      render(<HeroSection {...fullScreenProps} />);
      
      const image = screen.getByAltText('Test image');
      expect(image).toHaveClass('absolute', 'inset-0', 'w-full', 'h-full', 'object-cover');
    });

    it('applies full-screen styling to text content', () => {
      render(<HeroSection {...fullScreenProps} />);
      
      const header = screen.getByText('Test Header');
      expect(header).toHaveClass('text-white', 'drop-shadow-2xl');
      
      const subheader = screen.getByText('Test Subheader');
      expect(subheader).toHaveClass('text-white/90', 'drop-shadow-lg');
      
      const paragraph = screen.getByText('This is a test paragraph for the hero section component.');
      expect(paragraph).toHaveClass('text-white/80', 'drop-shadow-lg');
    });

    it('uses default layout when fullScreen is false', () => {
      render(<HeroSection {...defaultProps} fullScreen={false} />);
      
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).not.toHaveClass('h-screen');
      expect(heroSection).toHaveClass('max-w-7xl', 'mx-auto');
    });

    it('uses default layout when fullScreen prop is not provided', () => {
      render(<HeroSection {...defaultProps} />);
      
      const heroSection = screen.getByTestId('hero-section');
      expect(heroSection).not.toHaveClass('h-screen');
      expect(heroSection).toHaveClass('max-w-7xl', 'mx-auto');
    });

    it('renders image with absolute positioning in full-screen mode', () => {
      render(<HeroSection {...fullScreenProps} />);
      
      const image = screen.getByAltText('Test image');
      const imageContainer = image.parentElement;
      expect(imageContainer).toHaveClass('absolute', 'inset-0');
    });

    it('renders image with flex layout in default mode', () => {
      render(<HeroSection {...defaultProps} />);
      
      const image = screen.getByAltText('Test image');
      const imageContainer = image.parentElement;
      expect(imageContainer).toHaveClass('w-full', 'lg:w-1/2');
      expect(imageContainer).not.toHaveClass('absolute');
    });
  });
}); 