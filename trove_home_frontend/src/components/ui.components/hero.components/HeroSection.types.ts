import React from 'react';

export interface HeroSectionProps {
  imageSrc: string;
  imageAlt?: string;
  header: string;
  subheader?: string;
  paragraph: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  'data-testid'?: string;
}

export type HeroSectionVariant = 'default' | 'reversed';
export type HeroSectionSize = 'sm' | 'md' | 'lg'; 