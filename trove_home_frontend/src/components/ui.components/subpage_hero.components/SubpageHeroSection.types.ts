import React from 'react';

/**
 * Enumeration of available hero variants
 */
export enum SubpageHeroVariant {
  /** Hero with background image and overlay */
  IMAGE_OVERLAY = 'image-overlay',
  /** Hero with gradient background */
  GRADIENT = 'gradient',
  /** Hero with solid background */
  SOLID = 'solid'
}

/**
 * Enumeration of available hero sizes
 */
export enum SubpageHeroSize {
  /** Small hero section (40vh) */
  SMALL = 'small',
  /** Medium hero section (60vh) */
  MEDIUM = 'medium',
  /** Large hero section (80vh) */
  LARGE = 'large'
}

/**
 * Props interface for SubpageHeroSection component
 */
export interface SubpageHeroSectionProps {
  /**
   * Translation key for the main title
   */
  titleKey: string;
  
  /**
   * Translation key for the description
   */
  descriptionKey: string;
  
  /**
   * Hero variant style
   * @default SubpageHeroVariant.GRADIENT
   */
  variant?: SubpageHeroVariant;
  
  /**
   * Hero section size
   * @default SubpageHeroSize.MEDIUM
   */
  size?: SubpageHeroSize;
  
  /**
   * Background image source (required for IMAGE_OVERLAY variant)
   */
  backgroundImage?: string;
  
  /**
   * Alt text for background image
   */
  backgroundImageAlt?: string;
  
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  
  /**
   * Additional CSS classes for the title
   */
  titleClassName?: string;
  
  /**
   * Additional CSS classes for the description
   */
  descriptionClassName?: string;
  
  /**
   * Custom overlay opacity (0-100)
   * @default 70
   */
  overlayOpacity?: number;
  
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
  
  /**
   * Test ID for testing purposes
   */
  'data-testid'?: string;
}

/**
 * Internal style configuration interface
 */
export interface SubpageHeroStyleConfig {
  containerClasses: string;
  overlayClasses: string;
  contentContainerClasses: string;
  titleClasses: string;
  descriptionClasses: string;
  backgroundStyle: React.CSSProperties;
} 