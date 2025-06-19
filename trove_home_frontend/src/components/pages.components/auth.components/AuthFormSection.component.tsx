import React from 'react';
import { AuthFormSectionProps, AuthFormData, AuthFormValidation } from './Auth.types';
import { AUTH_FORM_CLASSES, AUTH_FORM_MODE_CONFIG } from './Auth.constants';
import { AuthValidationUtils } from './Auth.utils';
import FormField from './FormField.component';
import { Button } from '../../ui.components';

interface AuthFormSectionState {
  formData: AuthFormData;
  validation: AuthFormValidation;
  isSubmitting: boolean;
}

class AuthFormSection extends React.Component<AuthFormSectionProps, AuthFormSectionState> {
  constructor(props: AuthFormSectionProps) {
    super(props);
    
    this.state = {
      formData: this.getInitialFormData(),
      validation: { isValid: false, errors: this.getInitialErrors() },
      isSubmitting: false
    };
  }

  private getInitialFormData(): AuthFormData {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      agreeToTerms: false
    };
  }

  private getInitialErrors() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      agreeToTerms: ''
    };
  }

  componentDidUpdate(prevProps: AuthFormSectionProps): void {
    // Reset form when mode changes
    if (prevProps.mode !== this.props.mode) {
      this.setState({
        formData: this.getInitialFormData(),
        validation: { isValid: false, errors: this.getInitialErrors() },
        isSubmitting: false
      });
    }
  }

  private handleFieldChange = (fieldName: keyof AuthFormData, value: string | boolean): void => {
    this.setState(prevState => {
      const newFormData = {
        ...prevState.formData,
        [fieldName]: value
      };

      // Validate on change for better UX
      const validation = AuthValidationUtils.validateForm(newFormData, this.props.mode);

      return {
        formData: newFormData,
        validation
      };
    });
  };

  private handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    
    const { onSubmit } = this.props;
    const { formData } = this.state;

    // Final validation
    const validation = AuthValidationUtils.validateForm(formData, this.props.mode);
    
    this.setState({ validation });

    if (!validation.isValid) {
      return;
    }

    this.setState({ isSubmitting: true });

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      this.setState({ isSubmitting: false });
    }
  };

  private handleKeycloakLogin = (): void => {
    const { onKeycloakLogin } = this.props;
    if (onKeycloakLogin) {
      onKeycloakLogin();
    }
  };

  private handleGoogleLogin = (): void => {
    const { onGoogleLogin } = this.props;
    if (onGoogleLogin) {
      onGoogleLogin();
    }
  };

  private handleModeToggle = (): void => {
    const { mode, onModeChange } = this.props;
    const config = AUTH_FORM_MODE_CONFIG[mode];
    onModeChange(config.toggleMode);
  };

  private renderFormFields(): React.ReactNode {
    const { mode } = this.props;
    const { formData, validation } = this.state;

    const fields: React.ReactNode[] = [];

    // Email field (always present)
    fields.push(
      <FormField
        key="email"
        label="Email address"
        name="email"
        type="email"
        value={formData.email}
        onChange={(value) => this.handleFieldChange('email', value)}
        error={validation.errors.email}
        placeholder="Enter your email"
        required
        data-testid="auth-email-input"
      />
    );

    // Password field (always present except forgot-password)
    if (mode !== 'forgot-password') {
      fields.push(
        <FormField
          key="password"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(value) => this.handleFieldChange('password', value)}
          error={validation.errors.password}
          placeholder="Enter your password"
          required
          data-testid="auth-password-input"
        />
      );
    }

    // Register-specific fields
    if (mode === 'register') {
      fields.push(
        <FormField
          key="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword || ''}
          onChange={(value) => this.handleFieldChange('confirmPassword', value)}
          error={validation.errors.confirmPassword}
          placeholder="Confirm your password"
          required
          data-testid="auth-confirm-password-input"
        />
      );

      fields.push(
        <div key="names" className="grid grid-cols-2 gap-4">
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName || ''}
            onChange={(value) => this.handleFieldChange('firstName', value)}
            error={validation.errors.firstName}
            placeholder="First name"
            required
            data-testid="auth-first-name-input"
          />
          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName || ''}
            onChange={(value) => this.handleFieldChange('lastName', value)}
            error={validation.errors.lastName}
            placeholder="Last name"
            required
            data-testid="auth-last-name-input"
          />
        </div>
      );

      fields.push(
        <FormField
          key="agreeToTerms"
          label=""
          name="agreeToTerms"
          type="checkbox"
          value={formData.agreeToTerms || false}
          onChange={(value) => this.handleFieldChange('agreeToTerms', value)}
          error={validation.errors.agreeToTerms}
          required
          data-testid="auth-terms-checkbox"
        />
      );
    }

    return fields;
  }

  private renderSocialLogins(): React.ReactNode {
    const { onKeycloakLogin, onGoogleLogin } = this.props;

    if (!onKeycloakLogin && !onGoogleLogin) {
      return null;
    }

    return (
      <>
        <div className={AUTH_FORM_CLASSES.DIVIDER}>
          <div className={AUTH_FORM_CLASSES.DIVIDER_LINE}>
            <div className="w-full border-t border-border-light dark:border-border-dark" />
          </div>
          <div className={AUTH_FORM_CLASSES.DIVIDER_TEXT}>
            <span className="px-2 bg-background-light dark:bg-background-dark text-text-light dark:text-text-muted">
              Or continue with
            </span>
          </div>
        </div>

        <div className={AUTH_FORM_CLASSES.SOCIAL_BUTTONS}>
          {onKeycloakLogin && (
            <button
              type="button"
              onClick={this.handleKeycloakLogin}
              className={AUTH_FORM_CLASSES.SOCIAL_BUTTON}
              data-testid="auth-keycloak-button"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Continue with SSO
            </button>
          )}
          
          {onGoogleLogin && (
            <button
              type="button"
              onClick={this.handleGoogleLogin}
              className={AUTH_FORM_CLASSES.SOCIAL_BUTTON}
              data-testid="auth-google-button"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          )}
        </div>
      </>
    );
  }

  private renderModeToggle(): React.ReactNode {
    const { mode } = this.props;
    const config = AUTH_FORM_MODE_CONFIG[mode];

    return (
      <div className={AUTH_FORM_CLASSES.MODE_TOGGLE}>
        <p className={AUTH_FORM_CLASSES.MODE_TOGGLE_TEXT}>
          {config.toggleText}{' '}
          <span
            onClick={this.handleModeToggle}
            className={AUTH_FORM_CLASSES.MODE_TOGGLE_LINK}
            data-testid="auth-mode-toggle"
          >
            {config.toggleLinkText}
          </span>
        </p>
      </div>
    );
  }

  render(): React.ReactNode {
    const { 
      mode, 
      loading = false, 
      className = '',
      'data-testid': dataTestId 
    } = this.props;
    const { validation, isSubmitting } = this.state;
    
    const config = AUTH_FORM_MODE_CONFIG[mode];
    const isFormLoading = loading || isSubmitting;

    return (
      <div className={`${AUTH_FORM_CLASSES.CONTAINER} ${className}`.trim()} data-testid={dataTestId}>
        <div className={AUTH_FORM_CLASSES.FORM_WRAPPER}>
          <div className={AUTH_FORM_CLASSES.HEADER}>
            <h2 className={AUTH_FORM_CLASSES.TITLE}>
              {config.title}
            </h2>
            <p className={AUTH_FORM_CLASSES.SUBTITLE}>
              {config.subtitle}
            </p>
          </div>

          <form onSubmit={this.handleSubmit} className={AUTH_FORM_CLASSES.FORM} noValidate>
            {this.renderFormFields()}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={!validation.isValid || isFormLoading}
              loading={isFormLoading}
              className={AUTH_FORM_CLASSES.SUBMIT_BUTTON}
              data-testid="auth-submit-button"
            >
              {config.submitText}
            </Button>
          </form>

          {this.renderSocialLogins()}
          {this.renderModeToggle()}
        </div>
      </div>
    );
  }
}

export default AuthFormSection; 