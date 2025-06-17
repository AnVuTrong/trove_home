import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle.component';
import { useTheme } from '../../../../contexts/ThemeContext.context';

// Mock the useTheme hook
jest.mock('../../../../contexts/ThemeContext.context', () => ({
  useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

describe('ThemeToggle', () => {
  const mockToggleTheme = jest.fn();
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);
    
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
  });

  it('reflects current theme state', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: true,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);
    
    const toggle = screen.getByTestId('theme-toggle');
    expect(toggle).toBeInTheDocument();
  });

  it('calls toggleTheme when clicked', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);
    
    const toggle = screen.getByTestId('theme-toggle');
    fireEvent.click(toggle);
    
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('renders without label when showLabel is false', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle showLabel={false} />);
    
    expect(screen.queryByText('Theme')).not.toBeInTheDocument();
  });

  it('renders without icons when showIcons is false', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle showIcons={false} />);
    
    // Icons are SVG elements, so we check that they're not present
    const svgElements = screen.queryAllByRole('img', { hidden: true });
    expect(svgElements).toHaveLength(0);
  });

  it('renders with custom labels', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(
      <ThemeToggle 
        leftLabel="Day" 
        rightLabel="Night" 
        label="Theme Mode"
      />
    );
    
    expect(screen.getByText('Theme Mode')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    const { rerender } = render(<ThemeToggle size="sm" />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();

    rerender(<ThemeToggle size="lg" />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    const { rerender } = render(<ThemeToggle variant="primary" />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();

    rerender(<ThemeToggle variant="success" />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();

    rerender(<ThemeToggle variant="accent" />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle className="custom-class" />);
    
    const toggle = screen.getByTestId('theme-toggle');
    expect(toggle).toHaveClass('custom-class');
  });

  it('uses custom data-testid', () => {
    mockUseTheme.mockReturnValue({
      isDarkMode: false,
      toggleTheme: mockToggleTheme,
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle data-testid="custom-theme-toggle" />);
    
    expect(screen.getByTestId('custom-theme-toggle')).toBeInTheDocument();
    expect(screen.queryByTestId('theme-toggle')).not.toBeInTheDocument();
  });
}); 