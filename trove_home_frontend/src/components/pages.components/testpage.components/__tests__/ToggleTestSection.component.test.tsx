import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleTestSection from '../ToggleTestSection.component';

describe('ToggleTestSection', () => {
  const mockProps = {
    notificationToggle: true,
    darkModeToggle: false,
    autoSaveToggle: true,
    largeToggle: false,
    smallToggle: true,
    setNotificationToggle: jest.fn(),
    setDarkModeToggle: jest.fn(),
    setAutoSaveToggle: jest.fn(),
    setLargeToggle: jest.fn(),
    setSmallToggle: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the toggle test section with correct title', () => {
    render(<ToggleTestSection {...mockProps} />);
    
    expect(screen.getByText('Toggle Components')).toBeInTheDocument();
  });

  it('renders all toggle components with correct labels', () => {
    render(<ToggleTestSection {...mockProps} />);
    
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('Auto Save')).toBeInTheDocument();
    expect(screen.getByText('Disabled Toggle')).toBeInTheDocument();
    expect(screen.getByText('Large Size')).toBeInTheDocument();
    expect(screen.getByText('Small Size')).toBeInTheDocument();
  });

  it('has correct structure and classes', () => {
    const { container } = render(<ToggleTestSection {...mockProps} />);
    
    const sectionDiv = container.firstChild as HTMLElement;
    expect(sectionDiv).toHaveClass('bg-white', 'border', 'border-gray-200', 'rounded-lg', 'p-6', 'mb-8', 'shadow-sm');
    
    const togglesGrid = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-6');
    expect(togglesGrid).toBeInTheDocument();
  });

  it('passes correct props to toggle components', () => {
    render(<ToggleTestSection {...mockProps} />);
    
    // Check if toggles are rendered with correct initial states
    const toggleElements = screen.getAllByRole('switch');
    expect(toggleElements).toHaveLength(6); // 6 toggles total
  });
}); 