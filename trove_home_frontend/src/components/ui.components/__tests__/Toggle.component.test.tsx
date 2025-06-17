import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toggle from '../Toggle.component';

describe('Toggle Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should render with default props', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });

  it('should render in checked state', () => {
    render(<Toggle checked={true} onChange={mockOnChange} />);
    
    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('should call onChange when clicked', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('should call onChange with opposite value when clicked', () => {
    render(<Toggle checked={true} onChange={mockOnChange} />);
    
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  it('should not call onChange when disabled', () => {
    render(<Toggle checked={false} onChange={mockOnChange} disabled />);
    
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should handle keyboard events (Enter)', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    
    const toggle = screen.getByRole('switch');
    fireEvent.keyDown(toggle, { key: 'Enter', code: 'Enter' });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('should handle keyboard events (Space)', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);
    
    const toggle = screen.getByRole('switch');
    fireEvent.keyDown(toggle, { key: ' ', code: 'Space' });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('should render with label', () => {
    render(<Toggle checked={false} onChange={mockOnChange} label="Test Label" />);
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should render with left and right labels', () => {
    render(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        leftLabel="Light" 
        rightLabel="Dark" 
      />
    );
    
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        className="custom-class" 
        data-testid="custom-toggle"
      />
    );
    
    const container = screen.getByTestId('custom-toggle').parentElement?.parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('should apply different sizes correctly', () => {
    const { rerender } = render(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        size="sm" 
        data-testid="toggle-sm"
      />
    );
    
    let toggle = screen.getByTestId('toggle-sm');
    expect(toggle).toHaveClass('w-9', 'h-5');

    rerender(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        size="lg" 
        data-testid="toggle-lg"
      />
    );
    
    toggle = screen.getByTestId('toggle-lg');
    expect(toggle).toHaveClass('w-14', 'h-7');
  });

  it('should apply different variants correctly', () => {
    render(
      <Toggle 
        checked={true} 
        onChange={mockOnChange} 
        variant="success" 
        data-testid="toggle-success"
      />
    );
    
    const toggle = screen.getByTestId('toggle-success');
    expect(toggle).toHaveClass('bg-green-500', 'border-green-500');
  });

  it('should apply disabled styles when disabled', () => {
    render(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        disabled 
        data-testid="toggle-disabled"
      />
    );
    
    const toggle = screen.getByTestId('toggle-disabled');
    expect(toggle).toHaveClass('opacity-50', 'cursor-not-allowed');
    expect(toggle).toBeDisabled();
  });

  it('should render with icons', () => {
    const LeftIcon = () => <span>🌞</span>;
    const RightIcon = () => <span>🌙</span>;
    
    render(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        leftIcon={<LeftIcon />}
        rightIcon={<RightIcon />}
      />
    );
    
    expect(screen.getByText('🌞')).toBeInTheDocument();
    expect(screen.getByText('🌙')).toBeInTheDocument();
  });

  it('should have correct accessibility attributes', () => {
    render(
      <Toggle 
        checked={false} 
        onChange={mockOnChange} 
        label="Accessibility Test"
        data-testid="accessibility-toggle"
      />
    );
    
    const toggle = screen.getByTestId('accessibility-toggle');
    expect(toggle).toHaveAttribute('role', 'switch');
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(toggle).toHaveAttribute('aria-label', 'Accessibility Test');
  });
}); 