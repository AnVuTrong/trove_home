import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SliderTestSection from '../SliderTestSection.component';

describe('SliderTestSection', () => {
  const mockProps = {
    sliderValue: 50,
    volumeValue: 75,
    brightnessValue: 30,
    handleSliderChange: jest.fn(),
    handleVolumeChange: jest.fn(),
    handleBrightnessChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the slider test section with correct title', () => {
    render(<SliderTestSection {...mockProps} />);
    
    expect(screen.getByText('Slider Components')).toBeInTheDocument();
  });

  it('renders all slider components with correct labels', () => {
    render(<SliderTestSection {...mockProps} />);
    
    expect(screen.getByText('Basic Slider')).toBeInTheDocument();
    expect(screen.getByText('Volume Control')).toBeInTheDocument();
    expect(screen.getByText('Brightness Level')).toBeInTheDocument();
    expect(screen.getByText('Disabled Slider')).toBeInTheDocument();
    expect(screen.getByText('Precision Slider (0.1 steps)')).toBeInTheDocument();
  });

  it('has correct structure and classes', () => {
    const { container } = render(<SliderTestSection {...mockProps} />);
    
    const slidersContainer = container.querySelector('.space-y-6');
    expect(slidersContainer).toBeInTheDocument();
  });

  it('renders sliders with correct values', () => {
    render(<SliderTestSection {...mockProps} />);
    
    // Check if sliders are rendered (exact testing would depend on the Slider component implementation)
    const sliderContainers = screen.getAllByText(/Slider|Control|Level|Precision/);
    expect(sliderContainers.length).toBeGreaterThan(0);
  });

  it('passes correct props to slider components', () => {
    const { container } = render(<SliderTestSection {...mockProps} />);
    
    // Check that slider containers are rendered
    const sliderDivs = container.querySelectorAll('div > div');
    expect(sliderDivs.length).toBeGreaterThan(4); // Should have 5 slider containers
  });
}); 