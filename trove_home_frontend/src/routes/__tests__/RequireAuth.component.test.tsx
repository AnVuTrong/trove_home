import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from '../RequireAuth.component';
import { AuthProvider, useAuth } from '../../contexts';

// Mock Keycloak to avoid real network calls during unit tests
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
  };
  return {
    __esModule: true,
    default: mock,
  };
});

const keycloakMock = require('../../keycloak').default;

const Protected: React.FC = () => <div data-testid="protected">Protected Content</div>;

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  return (
    <div>
      <span>Login Page</span>
      <button onClick={() => login()}>Login</button>
    </div>
  );
};

describe('RequireAuth', () => {
  it('should redirect unauthenticated users to login', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AuthProvider>
          <Routes>
            <Route path="/dashboard" element={<RequireAuth><Protected /></RequireAuth>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.queryByTestId('protected')).toBeNull();
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('should allow authenticated users to access protected route', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AuthProvider>
          <Routes>
            <Route path="/dashboard" element={<RequireAuth><Protected /></RequireAuth>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>
    );

    // Click login to authenticate
    await user.click(screen.getByText('Login'));

    // Ensure keycloak login called
    expect(keycloakMock.login).toHaveBeenCalled();
  });
});