import React from 'react';
import { LoginSection } from '../components/pages.components/auth.components';
import { AuthFormData, AuthFormMode } from '../components/pages.components/auth.components/Auth.types';
import ThemeContext from '../contexts/ThemeContext.context';
import keycloak from '../keycloak';
import holographicBgDark from '../assets/trove_abstract_bg/dark/green_fluid_holographic_dark.jpg';
import holographicBgLight from '../assets/trove_abstract_bg/light/green_fluid_holographic_light.png';

class LoginPage extends React.Component {
  static contextType = ThemeContext;

  private handleAuthSubmit = async (data: AuthFormData, mode: AuthFormMode): Promise<void> => {
    // TODO: Implement actual authentication logic
    console.log('Auth submission:', { data, mode });
    
    try {
      // This is where you would integrate with your authentication service
      // For now, we'll just simulate the process
      
      switch (mode) {
        case 'login':
          console.log('Logging in user:', data.email);
          // await authService.login(data.email, data.password);
          break;
          
        case 'register':
          console.log('Registering user:', data.email, data.firstName, data.lastName);
          // await authService.register(data);
          break;
          
        case 'forgot-password':
          console.log('Sending password reset for:', data.email);
          // await authService.sendPasswordReset(data.email);
          break;
      }
      
      // Handle successful authentication
      // For example: redirect to dashboard or show success message
      
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle authentication errors
      // Show error message to user
    }
  };

  private handleKeycloakLogin = (): void => {
    keycloak.login();
  };

  private handleGoogleLogin = (): void => {
    // TODO: Implement Google OAuth authentication
    console.log('Google login initiated');
    
    try {
      // This is where you would integrate with Google OAuth
      // You might use libraries like react-google-login or google-auth-library
      
      // For development, you might want to redirect to a mock endpoint
      // window.location.href = '/api/auth/google';
      
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