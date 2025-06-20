import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from '../RequireAuth.component';
import { AuthProvider, useAuth, AuthUser } from '../../contexts';

const Protected: React.FC = () => <div data-testid="protected">Protected Content</div>;

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const demoUser: AuthUser = {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin',
    role: 'admin',
  };
  return (
    <div>
      <span>Login Page</span>
      <button onClick={() => login(demoUser)}>login</button>
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
    await user.click(screen.getByText('login'));

    expect(screen.getByTestId('protected')).toBeInTheDocument();
  });
});