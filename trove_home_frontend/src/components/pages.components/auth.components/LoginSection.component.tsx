import React from 'react';
import { LoginSectionProps, AuthFormMode, AuthFormData } from './Auth.types';
import AuthPageLayout from './AuthPageLayout.component';
import AuthImageSection from './AuthImageSection.component';
import AuthFormSection from './AuthFormSection.component';

interface LoginSectionState {
  currentMode: AuthFormMode;
}

class LoginSection extends React.Component<LoginSectionProps, LoginSectionState> {
  constructor(props: LoginSectionProps) {
    super(props);
    
    this.state = {
      currentMode: props.initialMode || 'login'
    };
  }

  private handleModeChange = (mode: AuthFormMode): void => {
    this.setState({ currentMode: mode });
  };

  private handleFormSubmit = async (data: AuthFormData): Promise<void> => {
    const { onSubmit } = this.props;
    const { currentMode } = this.state;
    
    await onSubmit(data, currentMode);
  };

  render(): React.ReactNode {
    const {
      imageSrc,
      imageAlt,
      overlayTitle,
      overlaySubtitle,
      onKeycloakLogin,
      onGoogleLogin,
      loading = false,
      className = '',
      'data-testid': dataTestId
    } = this.props;
    const { currentMode } = this.state;

    return (
      <AuthPageLayout className={className} data-testid={dataTestId}>
        <AuthImageSection
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          overlayTitle={overlayTitle}
          overlaySubtitle={overlaySubtitle}
          data-testid="auth-image-section"
        />
        
        <AuthFormSection
          mode={currentMode}
          onModeChange={this.handleModeChange}
          onSubmit={this.handleFormSubmit}
          onKeycloakLogin={onKeycloakLogin}
          onGoogleLogin={onGoogleLogin}
          loading={loading}
          data-testid="auth-form-section"
        />
      </AuthPageLayout>
    );
  }
}

export default LoginSection; 