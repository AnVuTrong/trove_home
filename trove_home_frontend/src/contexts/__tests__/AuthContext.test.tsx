import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../AuthContext.context';

// Mock Keycloak module
jest.mock('../../keycloak', () => {
  const mock = {
    authenticated: false,
    tokenParsed: undefined,
    init: () => Promise.resolve(true),
    login: jest.fn(() => {
      mock.authenticated = true;
    }),
    logout: jest.fn(() => {
      mock.authenticated = false;
    }),
    updateToken: jest.fn(),
  };
  return {
    __esModule: true,
    default: mock,
  };
});

// Access the mocked instance for assertions
const keycloakMock = require('../../keycloak').default;

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('AuthContext', () => {
  it('should expose default unauthenticated state', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBeNull();
  });

  it('should call keycloak.login when login is invoked', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => {
      result.current.login();
    });
    expect(keycloakMock.login).toHaveBeenCalled();
  });

  it('should call keycloak.logout when logout is invoked', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });
    act(() => {
      result.current.logout();
    });
    expect(keycloakMock.logout).toHaveBeenCalled();
  });
}); 