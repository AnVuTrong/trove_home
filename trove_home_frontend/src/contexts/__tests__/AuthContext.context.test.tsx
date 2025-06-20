import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth, AuthUser } from '..';

const TestComponent: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuth();

  const demoUser: AuthUser = {
    id: '123',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'user',
  };

  return (
    <div>
      <span data-testid="auth-status">{isAuthenticated ? 'logged-in' : 'logged-out'}</span>
      <span data-testid="user-email">{user?.email ?? ''}</span>
      <button onClick={() => login(demoUser)}>login</button>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

describe('AuthContext', () => {
  it('should handle login and logout correctly', async () => {
    const user = userEvent.setup();
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const status = screen.getByTestId('auth-status');
    expect(status.textContent).toBe('logged-out');

    await user.click(screen.getByText('login'));
    expect(status.textContent).toBe('logged-in');
    expect(screen.getByTestId('user-email').textContent).toBe('demo@example.com');

    await user.click(screen.getByText('logout'));
    expect(status.textContent).toBe('logged-out');
    expect(screen.getByTestId('user-email').textContent).toBe('');
  });
}); 