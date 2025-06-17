import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../button.components/LoadingSpinner.component';

// Mock the translation utility
jest.mock('../../../i18n/TranslationUtils.utils', () => ({
  translate: jest.fn((key: string, fallback: string) => fallback)
}));

describe('LoadingSpinner Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading spinner with default props', () => {
    const { container } = render(<LoadingSpinner />);
    
    // Check if the spinner container exists
    const spinnerContainer = container.querySelector('div.flex.items-center');
    expect(spinnerContainer).toBeInTheDocument();
    
    // Check if SVG is present
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render loading spinner with custom className', () => {
    const customClass = 'custom-spinner-class';
    const { container } = render(<LoadingSpinner className={customClass} />);
    
    const spinnerContainer = container.querySelector(`div.${customClass}`);
    expect(spinnerContainer).toBeInTheDocument();
  });

  it('should render SVG spinner icon', () => {
    const { container } = render(<LoadingSpinner />);
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('should have correct SVG structure', () => {
    const { container } = render(<LoadingSpinner />);
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svgElement).toHaveAttribute('fill', 'none');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
    
    const circleElement = svgElement?.querySelector('circle');
    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toHaveAttribute('cx', '12');
    expect(circleElement).toHaveAttribute('cy', '12');
    expect(circleElement).toHaveAttribute('r', '10');
    
    const pathElement = svgElement?.querySelector('path');
    expect(pathElement).toBeInTheDocument();
  });

  it('should call translate function with correct parameters', () => {
    const { translate } = require('../../../i18n/TranslationUtils.utils');
    
    render(<LoadingSpinner />);
    
    expect(translate).toHaveBeenCalledWith('common.loading', 'Loading...');
  });

  it('should render loading text when translate function works', () => {
    // Mock translate to return the expected text
    const { translate } = require('../../../i18n/TranslationUtils.utils');
    translate.mockReturnValue('Loading...');
    
    render(<LoadingSpinner />);
    
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
}); 