import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginSection from '../LoginSection.component';
import { AuthFormData, AuthFormMode } from '../Auth.types';

// Mock the UI components to avoid complex dependencies
jest.mock('../../../ui.components', () => ({
  Button: function MockButton({ children, onClick, disabled, loading, ...props }: any) {
    return (
      <button 
        onClick={onClick} 
        disabled={disabled || loading}
        {...props}
      >
        {loading ? 'Loading...' : children}
      </button>
    );
  }
}));

// Mock the child components
jest.mock('../AuthPageLayout.component', () => {
  return function MockAuthPageLayout({ children, className, 'data-testid': dataTestId, ...props }: any) {
    return (
      <div 
        data-testid={dataTestId || 'auth-page-layout'}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  };
});

jest.mock('../AuthImageSection.component', () => {
  return function MockAuthImageSection({ imageSrc, imageAlt, overlayTitle, overlaySubtitle, ...props }: any) {
    return (
      <div 
        data-testid="auth-image-section" 
        data-image-src={imageSrc}
        data-image-alt={imageAlt}
        data-overlay-title={overlayTitle}
        data-overlay-subtitle={overlaySubtitle}
        {...props} 
      />
    );
  };
});

jest.mock('../AuthFormSection.component', () => {
  return function MockAuthFormSection({ mode, onModeChange, onSubmit, onKeycloakLogin, onGoogleLogin, loading, ...props }: any) {
    return (
      <div 
        data-testid="auth-form-section" 
        data-loading={loading?.toString()}
        {...props}
      >
        <span data-testid="current-mode">{mode}</span>
        <button 
          data-testid="change-mode-button" 
          onClick={() => onModeChange(mode === 'login' ? 'register' : 'login')}
        >
          Change Mode
        </button>
        <button 
          data-testid="submit-form-button" 
          onClick={() => onSubmit({ email: 'test@example.com', password: 'password' })}
        >
          Submit Form
        </button>
        {onKeycloakLogin && (
          <button data-testid="keycloak-button" onClick={onKeycloakLogin}>
            Keycloak Login
          </button>
        )}
        {onGoogleLogin && (
          <button data-testid="google-button" onClick={onGoogleLogin}>
            Google Login
          </button>
        )}
      </div>
    );
  };
});

describe('LoginSection', () => {
  const mockOnSubmit = jest.fn();
  const mockOnKeycloakLogin = jest.fn();
  const mockOnGoogleLogin = jest.fn();

  const defaultProps = {
    imageSrc: '/test-image.jpg',
    imageAlt: 'Test image',
    overlayTitle: 'Test Title',
    overlaySubtitle: 'Test Subtitle',
    onSubmit: mockOnSubmit
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default login mode', () => {
    render(<LoginSection {...defaultProps} />);

    expect(screen.getByTestId('auth-page-layout')).toBeInTheDocument();
    expect(screen.getByTestId('auth-image-section')).toBeInTheDocument();
    expect(screen.getByTestId('auth-form-section')).toBeInTheDocument();
    expect(screen.getByTestId('current-mode')).toHaveTextContent('login');
  });

  it('should render with specified initial mode', () => {
    render(<LoginSection {...defaultProps} initialMode="register" />);

    expect(screen.getByTestId('current-mode')).toHaveTextContent('register');
  });

  it('should pass image props to AuthImageSection', () => {
    render(<LoginSection {...defaultProps} />);

    const imageSection = screen.getByTestId('auth-image-section');
    expect(imageSection).toHaveAttribute('data-image-src', '/test-image.jpg');
    expect(imageSection).toHaveAttribute('data-image-alt', 'Test image');
    expect(imageSection).toHaveAttribute('data-overlay-title', 'Test Title');
    expect(imageSection).toHaveAttribute('data-overlay-subtitle', 'Test Subtitle');
  });

  it('should pass auth handlers to AuthFormSection', () => {
    render(
      <LoginSection 
        {...defaultProps} 
        onKeycloakLogin={mockOnKeycloakLogin}
        onGoogleLogin={mockOnGoogleLogin}
      />
    );

    const formSection = screen.getByTestId('auth-form-section');
    expect(screen.getByTestId('keycloak-button')).toBeInTheDocument();
    expect(screen.getByTestId('google-button')).toBeInTheDocument();
  });

  it('should handle mode changes', async () => {
    render(<LoginSection {...defaultProps} />);

    expect(screen.getByTestId('current-mode')).toHaveTextContent('login');

    fireEvent.click(screen.getByTestId('change-mode-button'));

    await waitFor(() => {
      expect(screen.getByTestId('current-mode')).toHaveTextContent('register');
    });
  });

  it('should handle form submission with login mode', async () => {
    render(<LoginSection {...defaultProps} />);

    fireEvent.click(screen.getByTestId('submit-form-button'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        { email: 'test@example.com', password: 'password' },
        'login'
      );
    });
  });

  it('should handle form submission with register mode', async () => {
    render(<LoginSection {...defaultProps} initialMode="register" />);

    fireEvent.click(screen.getByTestId('submit-form-button'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        { email: 'test@example.com', password: 'password' },
        'register'
      );
    });
  });

  it('should pass loading state to AuthFormSection', () => {
    render(<LoginSection {...defaultProps} loading={true} />);

    const formSection = screen.getByTestId('auth-form-section');
    expect(formSection).toHaveAttribute('data-loading', 'true');
  });

  it('should apply custom className', () => {
    render(<LoginSection {...defaultProps} className="custom-class" />);

    const pageLayout = screen.getByTestId('auth-page-layout');
    expect(pageLayout).toHaveClass('custom-class');
  });

  it('should apply data-testid', () => {
    render(<LoginSection {...defaultProps} data-testid="custom-login-section" />);

    expect(screen.getByTestId('custom-login-section')).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    const successfulOnSubmit = jest.fn().mockResolvedValue(undefined);

    render(<LoginSection {...defaultProps} onSubmit={successfulOnSubmit} />);

    fireEvent.click(screen.getByTestId('submit-form-button'));

    await waitFor(() => {
      expect(successfulOnSubmit).toHaveBeenCalledWith(
        { email: 'test@example.com', password: 'password' },
        'login'
      );
    });
  });
}); 