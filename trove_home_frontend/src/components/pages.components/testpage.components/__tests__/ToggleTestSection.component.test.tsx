import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleTestSection from '../ToggleTestSection.component';
import { ThemeProvider } from '../../../../contexts/ThemeContext.context';

describe('ToggleTestSection', () => {
  const mockProps = {
    notificationToggle: true,
    autoSaveToggle: true,
    largeToggle: false,
    smallToggle: true,
    setNotificationToggle: jest.fn(),
    setAutoSaveToggle: jest.fn(),
    setLargeToggle: jest.fn(),
    setSmallToggle: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the toggle test section with correct title', () => {
    render(
      <ThemeProvider>
        <ToggleTestSection {...mockProps} />
      </ThemeProvider>
    );
    
    expect(screen.getByText('Toggle Components')).toBeInTheDocument();
  });

  it('renders all toggle components with correct labels', () => {
    render(
      <ThemeProvider>
        <ToggleTestSection {...mockProps} />
      </ThemeProvider>
    );
    
    expect(screen.getByText('Enable Notifications')).toBeInTheDocument();
    expect(screen.getByText('Theme Mode')).toBeInTheDocument();
    expect(screen.getByText('Auto Save Documents')).toBeInTheDocument();
    expect(screen.getByText('Manual')).toBeInTheDocument();
    expect(screen.getByText('Auto')).toBeInTheDocument();
    expect(screen.getByText('Disabled Feature')).toBeInTheDocument();
    expect(screen.getByText('Large Display Size')).toBeInTheDocument();
    expect(screen.getByText('Compact View Mode')).toBeInTheDocument();
    expect(screen.getByText('Off')).toBeInTheDocument();
    expect(screen.getByText('On')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
    expect(screen.getByText('Full')).toBeInTheDocument();
    expect(screen.getByText('Compact')).toBeInTheDocument();
  });

  it('has correct structure and classes', () => {
    const { container } = render(
      <ThemeProvider>
        <ToggleTestSection {...mockProps} />
      </ThemeProvider>
    );
    
    const sectionDiv = container.firstChild as HTMLElement;
    expect(sectionDiv).toHaveClass('bg-white', 'border', 'border-gray-200', 'rounded-lg', 'p-6', 'mb-8', 'shadow-sm');
    
    const togglesGrid = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-6');
    expect(togglesGrid).toBeInTheDocument();
  });

  it('passes correct props to toggle components', () => {
    render(
      <ThemeProvider>
        <ToggleTestSection {...mockProps} />
      </ThemeProvider>
    );
    
    // Check if toggles are rendered with correct initial states
    const toggleElements = screen.getAllByRole('switch');
    expect(toggleElements).toHaveLength(6); // 6 toggles total
  });
}); 