import keycloak from '../../keycloak';

export class KeycloakAuthService {
  static login(): void {
    keycloak.login();
  }

  static register(): void {
    keycloak.register();
  }

  static googleLogin(): void {
    keycloak.login({ idpHint: 'google' });
  }

  static resetPassword(): void {
    keycloak.login({ action: 'reset-password' });
  }

  static logout(): void {
    keycloak.logout();
  }
} 