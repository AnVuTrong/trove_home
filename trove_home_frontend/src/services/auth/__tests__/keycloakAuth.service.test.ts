import { KeycloakAuthService } from '../keycloakAuth.service';

// Mock keycloak instance
const keycloakMock = {
  login: jest.fn(),
  register: jest.fn(),
  logout: jest.fn(),
};

jest.mock('../../../keycloak', () => ({
  __esModule: true,
  default: keycloakMock,
}));

describe('KeycloakAuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('login should call keycloak.login()', () => {
    KeycloakAuthService.login();
    expect(keycloakMock.login).toHaveBeenCalled();
  });

  it('register should call keycloak.register()', () => {
    KeycloakAuthService.register();
    expect(keycloakMock.register).toHaveBeenCalled();
  });

  it('googleLogin should call keycloak.login with idpHint', () => {
    KeycloakAuthService.googleLogin();
    expect(keycloakMock.login).toHaveBeenCalledWith({ idpHint: 'google' });
  });

  it('resetPassword should call keycloak.login with action reset-password', () => {
    KeycloakAuthService.resetPassword();
    expect(keycloakMock.login).toHaveBeenCalledWith({ action: 'reset-password' });
  });

  it('logout should call keycloak.logout()', () => {
    KeycloakAuthService.logout();
    expect(keycloakMock.logout).toHaveBeenCalled();
  });
}); 