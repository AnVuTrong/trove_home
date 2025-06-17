import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveDemoSection from '../InteractiveDemoSection.component';

describe('InteractiveDemoSection', () => {
  const mockProps = {
    sliderValue: 50,
    volumeValue: 75,
    brightnessValue: 30,
    notificationToggle: true,
    darkModeToggle: false,
    autoSaveToggle: true,
    largeToggle: false,
    smallToggle: true,
    handleFormSubmit: jest.fn(),
    onResetToDefaults: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the interactive demo section with correct title', () => {
    render(<InteractiveDemoSection {...mockProps} />);
    
    expect(screen.getByText('Interactive Demo')).toBeInTheDocument();
  });

  it('displays correct slider values', () => {
    render(<InteractiveDemoSection {...mockProps} />);
    
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Slider Value: 50';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Volume Value: 75';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Brightness Value: 30';
    })).toBeInTheDocument();
  });

  it('displays correct toggle states', () => {
    render(<InteractiveDemoSection {...mockProps} />);
    
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Notifications: On';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Dark Mode: Off';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Auto Save: On';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Large Toggle: Off';
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      return element?.textContent === 'Small Toggle: On';
    })).toBeInTheDocument();
  });

  it('calls handleFormSubmit when Log Current Values button is clicked', () => {
    render(<InteractiveDemoSection {...mockProps} />);
    
    const logButton = screen.getByText('Log Current Values');
    fireEvent.click(logButton);
    
    expect(mockProps.handleFormSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls onResetToDefaults when Reset to Defaults button is clicked', () => {
    render(<InteractiveDemoSection {...mockProps} />);
    
    const resetButton = screen.getByText('Reset to Defaults');
    fireEvent.click(resetButton);
    
    expect(mockProps.onResetToDefaults).toHaveBeenCalledTimes(1);
  });

  it('has correct structure and classes', () => {
    const { container } = render(<InteractiveDemoSection {...mockProps} />);
    
    const sectionDiv = container.firstChild as HTMLElement;
    expect(sectionDiv).toHaveClass('bg-white', 'border', 'border-gray-200', 'rounded-lg', 'p-6', 'mb-8', 'shadow-sm');
    
    const valuesContainer = container.querySelector('.bg-gray-50.p-4.rounded-md');
    expect(valuesContainer).toBeInTheDocument();
    
    const buttonsContainer = container.querySelector('.flex.gap-4');
    expect(buttonsContainer).toBeInTheDocument();
  });
}); 