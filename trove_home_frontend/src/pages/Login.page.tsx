import React from 'react';
import { LoginSection } from '../components/pages.components/auth.components';
import { AuthFormData, AuthFormMode } from '../components/pages.components/auth.components/Auth.types';
import ThemeContext from '../contexts/ThemeContext.context';
import { KeycloakAuthService } from '../services/auth/keycloakAuth.service';
import holographicBgDark from '../assets/trove_abstract_bg/dark/green_fluid_holographic_dark.jpg';
import holographicBgLight from '../assets/trove_abstract_bg/light/green_fluid_holographic_light.png';

class LoginPage extends React.Component {
  static contextType = ThemeContext;

  private handleAuthSubmit = async (_data: AuthFormData, mode: AuthFormMode): Promise<void> => {
    try {
      switch (mode) {
        case 'login':
          KeycloakAuthService.login();
          break;
        case 'register':
          KeycloakAuthService.register();
          break;
        case 'forgot-password':
          KeycloakAuthService.resetPassword();
          break;
        default:
          KeycloakAuthService.login();
      }
    } catch (error) {
      console.error('Keycloak auth error:', error);
    }
  };

  private handleKeycloakLogin = (): void => {
    KeycloakAuthService.login();
  };

  private handleGoogleLogin = (): void => {
    try {
      KeycloakAuthService.googleLogin();
    } catch (error) {
      console.error('Google authentication error:', error);
    }
  };

  render(): React.ReactNode {
    const isDarkMode = (this.context as any)?.isDarkMode ?? false;

    const holographicBg = isDarkMode ? holographicBgDark : holographicBgLight;

    return (
      <LoginSection
        imageSrc={holographicBg}
        imageAlt="Trove authentication background"
        overlayTitle="Welcome to Trove"
        overlaySubtitle="Secure access to your digital world"
        onSubmit={this.handleAuthSubmit}
        onKeycloakLogin={this.handleKeycloakLogin}
        onGoogleLogin={this.handleGoogleLogin}
        initialMode="login"
        data-testid="login-page"
      />
    );
  }
}

export default LoginPage; 