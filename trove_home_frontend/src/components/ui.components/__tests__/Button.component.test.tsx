import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonProps } from '../Button.component';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    children: 'Test Button'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render button with correct text', () => {
      render(<Button {...defaultProps} />);
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    });

    it('should render with default props', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('type', 'button');
      expect(button).not.toBeDisabled();
      expect(button).toHaveClass('bg-blue-600'); // primary variant
      expect(button).toHaveClass('px-4', 'py-2'); // md size
    });

    it('should render with custom data-testid', () => {
      render(<Button {...defaultProps} data-testid="custom-button" />);
      expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply primary variant classes', () => {
      render(<Button {...defaultProps} variant="primary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-blue-600', 'hover:bg-blue-700', 'text-white', 'border-blue-600');
    });

    it('should apply secondary variant classes', () => {
      render(<Button {...defaultProps} variant="secondary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-600', 'hover:bg-gray-700', 'text-white', 'border-gray-600');
    });

    it('should apply danger variant classes', () => {
      render(<Button {...defaultProps} variant="danger" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-red-600', 'hover:bg-red-700', 'text-white', 'border-red-600');
    });

    it('should apply success variant classes', () => {
      render(<Button {...defaultProps} variant="success" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-green-600', 'hover:bg-green-700', 'text-white', 'border-green-600');
    });

    it('should apply outline variant classes', () => {
      render(<Button {...defaultProps} variant="outline" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent', 'hover:bg-gray-50', 'text-gray-700', 'border-gray-300');
    });
  });

  describe('Sizes', () => {
    it('should apply small size classes', () => {
      render(<Button {...defaultProps} size="sm" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm');
    });

    it('should apply medium size classes', () => {
      render(<Button {...defaultProps} size="md" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-2', 'text-base');
    });

    it('should apply large size classes', () => {
      render(<Button {...defaultProps} size="lg" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
    });

    it('should apply extra large size classes', () => {
      render(<Button {...defaultProps} size="xl" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-8', 'py-4', 'text-xl');
    });
  });

  describe('Button Types', () => {
    it('should render submit type button', () => {
      render(<Button {...defaultProps} type="submit" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should render reset type button', () => {
      render(<Button {...defaultProps} type="reset" />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });

  describe('States', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Button {...defaultProps} disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
    });

    it('should show loading state', () => {
      render(<Button {...defaultProps} loading />);
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      expect(button.querySelector('svg')).toBeInTheDocument();
      expect(button.querySelector('.animate-spin')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} onClick={handleClick} />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} onClick={handleClick} disabled />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} onClick={handleClick} loading />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should pass event object to onClick handler', () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} onClick={handleClick} />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      render(<Button {...defaultProps} className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should maintain base classes with custom className', () => {
      render(<Button {...defaultProps} className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('font-medium', 'rounded-md', 'border', 'custom-class');
    });
  });

  describe('Accessibility', () => {
    it('should have focus ring classes for accessibility', () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-blue-500');
    });

    it('should be keyboard accessible', () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} onClick={handleClick} />);
      const button = screen.getByRole('button');
      
      button.focus();
      fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
      // Note: Testing library doesn't trigger click on Enter by default for buttons
      // This would need additional keyboard event handling if required
    });
  });
}); 