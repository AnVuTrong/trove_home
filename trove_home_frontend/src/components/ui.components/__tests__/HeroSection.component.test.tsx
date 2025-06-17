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
    
    // Component now renders both mobile and desktop images
    const images = screen.getAllByAltText('Test image');
    expect(images).toHaveLength(2); // Mobile + Desktop images
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
    
    const images = screen.getAllByAltText('Hero image');
    expect(images).toHaveLength(2); // Mobile + Desktop images
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
    
    const images = screen.getAllByAltText('Test image');
    // Both mobile and desktop images should have the custom class
    images.forEach(image => {
      expect(image).toHaveClass(customImageClassName);
    });
  });

  it('applies custom textClassName when provided', () => {
    const customTextClassName = 'custom-text-class';
    
    render(<HeroSection {...defaultProps} textClassName={customTextClassName} />);
    
    const heroSection = screen.getByTestId('hero-section');
    const textContainer = heroSection.querySelector('.space-y-4');
    expect(textContainer).toHaveClass(customTextClassName);
  });

  it('has correct image src', () => {
    render(<HeroSection {...defaultProps} />);
    
    const images = screen.getAllByAltText('Test image') as HTMLImageElement[];
    images.forEach(image => {
      expect(image.src).toContain('/test-image.jpg');
    });
  });

  it('renders with proper semantic HTML structure', () => {
    render(<HeroSection {...defaultProps} />);
    
    // Check for semantic HTML elements
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2); // Mobile + Desktop images
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  describe('Responsive Layout', () => {
    it('renders responsive container with correct classes', () => {
      render(<HeroSection {...defaultProps} />);
      
      const heroSection = screen.getByTestId('hero-section');
      // Should have responsive classes for mobile fullscreen and desktop layout
      expect(heroSection).toHaveClass('relative', 'w-full', 'h-screen');
      expect(heroSection).toHaveClass('lg:h-auto', 'lg:max-w-7xl', 'lg:mx-auto');
    });

    it('renders mobile fullscreen image with correct classes', () => {
      render(<HeroSection {...defaultProps} />);
      
      const images = screen.getAllByAltText('Test image');
      // Find the mobile image (should be in lg:hidden container)
      const mobileImage = images.find(img => 
        img.parentElement?.classList.contains('lg:hidden')
      );
      
      expect(mobileImage).toBeDefined();
      expect(mobileImage?.parentElement).toHaveClass('lg:hidden', 'absolute', 'inset-0');
    });

    it('renders desktop image with correct classes', () => {
      render(<HeroSection {...defaultProps} />);
      
      const images = screen.getAllByAltText('Test image');
      // Find the desktop image (should be in hidden lg:block container)
      const desktopImage = images.find(img => 
        img.parentElement?.classList.contains('hidden') &&
        img.parentElement?.classList.contains('lg:block')
      );
      
      expect(desktopImage).toBeDefined();
      expect(desktopImage?.parentElement).toHaveClass('hidden', 'lg:block', 'lg:w-1/2', 'order-1');
    });

    it('renders mobile overlay for fullscreen mode', () => {
      render(<HeroSection {...defaultProps} />);
      
      const heroSection = screen.getByTestId('hero-section');
      const overlay = heroSection.querySelector('.lg\\:hidden.absolute.inset-0.bg-black\\/30');
      expect(overlay).toBeInTheDocument();
    });

    it('renders text content with responsive styling', () => {
      render(<HeroSection {...defaultProps} />);
      
      const header = screen.getByText('Test Header');
      const subheader = screen.getByText('Test Subheader');
      const paragraph = screen.getByText('This is a test paragraph for the hero section component.');
      
      // Should have white text for mobile (with drop shadows) and gray text for desktop
      expect(header).toHaveClass('text-white', 'drop-shadow-2xl', 'lg:text-gray-900', 'lg:drop-shadow-none');
      expect(subheader).toHaveClass('text-white/90', 'drop-shadow-lg', 'lg:text-gray-600', 'lg:drop-shadow-none');
      expect(paragraph).toHaveClass('text-white/80', 'drop-shadow-lg', 'lg:text-gray-700', 'lg:drop-shadow-none');
    });

    it('renders text container with responsive positioning', () => {
      render(<HeroSection {...defaultProps} />);
      
      const heroSection = screen.getByTestId('hero-section');
      const textContainer = heroSection.querySelector('.relative.z-20');
      
      expect(textContainer).toHaveClass(
        'relative', 'z-20', 'flex', 'flex-col', 'justify-center', 'items-center', 'text-center',
        'lg:items-start', 'lg:text-left', 'lg:w-1/2', 'lg:order-2'
      );
    });
  });

  describe('Legacy Props Compatibility', () => {
    it('ignores fullScreen prop since component is now fully responsive', () => {
      render(<HeroSection {...defaultProps} fullScreen={true} />);
      
      const heroSection = screen.getByTestId('hero-section');
      // Should still render responsive layout regardless of fullScreen prop
      expect(heroSection).toHaveClass('relative', 'w-full', 'h-screen', 'lg:h-auto');
    });

    it('maintains same behavior when fullScreen is false', () => {
      render(<HeroSection {...defaultProps} fullScreen={false} />);
      
      const heroSection = screen.getByTestId('hero-section');
      // Should still render responsive layout
      expect(heroSection).toHaveClass('relative', 'w-full', 'h-screen', 'lg:h-auto');
    });
  });
}); 