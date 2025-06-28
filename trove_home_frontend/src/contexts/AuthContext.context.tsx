import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import keycloak from '../keycloak';

export type UserRole = 'user' | 'admin';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const LOCAL_STORAGE_KEY = 'trove_auth_user';

// Add type for Keycloak tokenParsed roles
interface KeycloakTokenParsed {
  sub?: string;
  email?: string;
  name?: string;
  realm_access?: {
    roles: string[];
  };
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /**
   * Helper: Extract user info from Keycloak token and set application user state
   */
  const syncUserFromToken = () => {
    if (keycloak.authenticated && keycloak.tokenParsed) {
      const tokenParsed = keycloak.tokenParsed as unknown as KeycloakTokenParsed;
      const role = tokenParsed.realm_access?.roles?.includes('admin') ? 'admin' : 'user';
      const authUser: AuthUser = {
        id: tokenParsed.sub || '',
        email: tokenParsed.email || '',
        name: tokenParsed.name || '',
        role,
      };
      setUser(authUser);
      setIsAuthenticated(true);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authUser));
    } else {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  // Attach listeners once (ReactKeycloakProvider already calls init)
  useEffect(() => {
    const handleAuthChange = () => syncUserFromToken();

    // Initial sync (after provider init, authenticated flag will be set)
    syncUserFromToken();

    keycloak.onAuthSuccess = handleAuthChange;
    keycloak.onAuthLogout = handleAuthChange;
    keycloak.onTokenExpired = () => {
      keycloak.updateToken(30).catch(() => keycloak.logout());
    };

    return () => {
      keycloak.onAuthSuccess = undefined;
      keycloak.onAuthLogout = undefined;
      keycloak.onTokenExpired = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fallback to stored user (only if Keycloak SSO fails). Mainly for development without Keycloak.
  useEffect(() => {
    if (!keycloak.authenticated) {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
          setUser(JSON.parse(stored) as AuthUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to parse stored user', error);
      }
    }
  }, []);

  const login = () => {
    if (keycloak) {
      keycloak.login();
    }
  };

  const logout = () => {
    if (keycloak) {
      keycloak.logout();
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 