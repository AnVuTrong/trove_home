import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider, { SliderProps } from '../Slider.component';

describe('Slider Component', () => {
  const defaultProps: SliderProps = {
    value: 50,
    onChange: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<Slider {...defaultProps} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
    expect(slider).toHaveAttribute('step', '1');
    expect(slider).toHaveAttribute('value', '50');
  });

  it('should render with custom min, max, and step', () => {
    const customProps = {
      ...defaultProps,
      min: 10,
      max: 200,
      step: 5,
      value: 100
    };

    render(<Slider {...customProps} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '200');
    expect(slider).toHaveAttribute('step', '5');
    expect(slider).toHaveAttribute('value', '100');
  });

  it('should display label when provided', () => {
    const propsWithLabel = {
      ...defaultProps,
      label: 'Volume Control'
    };

    render(<Slider {...propsWithLabel} />);
    
    expect(screen.getByText('Volume Control')).toBeInTheDocument();
  });

  it('should display value when showValue is true', () => {
    const propsWithValue = {
      ...defaultProps,
      label: 'Volume',
      showValue: true,
      value: 75
    };

    render(<Slider {...propsWithValue} />);
    
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('should display min and max values', () => {
    const customProps = {
      ...defaultProps,
      min: 20,
      max: 80
    };

    render(<Slider {...customProps} />);
    
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
  });

  it('should call onChange when value changes', () => {
    const mockOnChange = jest.fn();
    const props = {
      ...defaultProps,
      onChange: mockOnChange
    };

    render(<Slider {...props} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(mockOnChange).toHaveBeenCalledWith(75);
  });

  it('should not call onChange when disabled', () => {
    const mockOnChange = jest.fn();
    const disabledProps = {
      ...defaultProps,
      onChange: mockOnChange,
      disabled: true
    };

    render(<Slider {...disabledProps} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    fireEvent.change(slider, { target: { value: '75' } });
    
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should have disabled attribute when disabled prop is true', () => {
    const disabledProps = {
      ...defaultProps,
      disabled: true
    };

    render(<Slider {...disabledProps} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    expect(slider).toBeDisabled();
  });

  it('should apply custom className', () => {
    const propsWithClassName = {
      ...defaultProps,
      className: 'custom-slider-class'
    };

    render(<Slider {...propsWithClassName} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    expect(slider).toHaveClass('custom-slider-class');
  });

  it('should handle float values correctly', () => {
    const mockOnChange = jest.fn();
    const floatProps = {
      ...defaultProps,
      onChange: mockOnChange,
      step: 0.1
    };

    render(<Slider {...floatProps} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    fireEvent.change(slider, { target: { value: '25.5' } });
    
    expect(mockOnChange).toHaveBeenCalledWith(25.5);
  });

  it('should not call onChange when onChange prop is not provided', () => {
    const propsWithoutOnChange = {
      value: 50
    };

    render(<Slider {...propsWithoutOnChange} data-testid="test-slider" />);
    
    const slider = screen.getByTestId('test-slider');
    
    // Should not throw error when trying to change value
    expect(() => {
      fireEvent.change(slider, { target: { value: '75' } });
    }).not.toThrow();
  });
}); 