import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form, { FormProps } from '../Form.component';
import * as TranslationUtils from '../../../i18n/TranslationUtils.utils';

// Mock the translate function
jest.mock('../../../i18n/TranslationUtils.utils', () => ({
  translate: jest.fn((key: string, defaultValue: string) => {
    // Return Vietnamese translation for the specific key
    if (key === 'common.formSubmissionError') {
      return 'Lỗi gửi form:';
    }
    return defaultValue;
  })
}));

describe('Form Component', () => {
  const defaultProps: FormProps = {
    children: <input type="text" name="test" required />
  };

  // Create a spy but don't mock it automatically
  let consoleSpy: jest.SpyInstance;
  let originalConsoleError: typeof console.error;

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Save original console.error (this might be our mocked version from setupTests)
    originalConsoleError = console.error;
    
    // Set up console spy with a fresh implementation that captures calls
    consoleSpy = jest.spyOn(console, 'error').mockImplementation((...args) => {
      // Log the actual arguments for debugging
      // console.log('Console.error called with:', args);
    });
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    // Restore original console.error
    console.error = originalConsoleError;
  });

  it('should render form with children', () => {
    render(<Form {...defaultProps} />);
    
    const form = document.querySelector('form');
    const input = screen.getByRole('textbox');
    
    expect(form).toBeTruthy();
    expect(input).toBeInTheDocument();
  });

  it('should use translated error message when submission fails', async () => {
    const mockTranslate = TranslationUtils.translate as jest.MockedFunction<typeof TranslationUtils.translate>;
    
    // Reset the mock to ensure it's clean
    mockTranslate.mockClear();
    mockTranslate.mockImplementation((key: string, defaultValue: string) => {
      if (key === 'common.formSubmissionError') {
        return 'Lỗi gửi form:';
      }
      return defaultValue;
    });
    
    const mockOnSubmit = jest.fn().mockRejectedValue(new Error('Test error'));
    
    render(
      <Form {...defaultProps} onSubmit={mockOnSubmit}>
        <input type="text" name="test" required />
        <button type="submit">Submit</button>
      </Form>
    );
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockTranslate).toHaveBeenCalledWith('common.formSubmissionError', 'Form submission error:');
    });

    // Verify console.error was called
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled();
    });
    
    // Check that the translate function was called and returned the expected value
    expect(mockTranslate).toHaveBeenCalledWith('common.formSubmissionError', 'Form submission error:');
    
    // Verify the console.error call includes an error
    const consoleErrorCalls = consoleSpy.mock.calls;
    expect(consoleErrorCalls.length).toBeGreaterThan(0);
    
    // Find a call that includes an Error object
    const errorCall = consoleErrorCalls.find(call => 
      call.some((arg: any) => arg instanceof Error)
    );
    
    expect(errorCall).toBeDefined();
    expect(errorCall?.some((arg: any) => arg instanceof Error)).toBe(true);
  });

  it('should handle successful form submission without error', async () => {
    const mockOnSubmit = jest.fn().mockResolvedValue(undefined);
    
    render(
      <Form {...defaultProps} onSubmit={mockOnSubmit}>
        <input type="text" name="test" required />
        <button type="submit">Submit</button>
      </Form>
    );
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });

  it('should apply spacing classes correctly', () => {
    render(<Form spacing="lg">{defaultProps.children}</Form>);
    
    const form = document.querySelector('form');
    expect(form).toHaveClass('space-y-6');
  });
}); 