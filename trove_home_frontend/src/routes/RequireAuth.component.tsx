import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts';
import { ROUTES } from '../constants/Routes.constant';

interface RequireAuthProps {
  children: JSX.Element;
  requireAdmin?: boolean;
}

/**
 * Route guard component to protect authenticated routes.
 * Optionally restricts route to admin users only.
 */
const RequireAuth: React.FC<RequireAuthProps> = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, user, login } = useAuth();
  const location = useLocation();

  // Allow bypassing authentication for development/preview purposes
  const bypassAuth = process.env.REACT_APP_BYPASS_AUTH === 'true';

  if (bypassAuth) {
    return children;
  }

  if (!isAuthenticated) {
    // Inline fallback login UI used mainly for testing or restricted routes
    return (
      <div>
        <span>Login Page</span>
        <button onClick={() => login()}>
          Login with Keycloak
        </button>
      </div>
    );
  }

  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  // If user just logged in and is currently on the login page, redirect them back to dashboard
  if (isAuthenticated && location.pathname === ROUTES.LOGIN) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return children;
};

export default RequireAuth; 