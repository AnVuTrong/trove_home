import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  login: (user: AuthUser, token?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const LOCAL_STORAGE_KEY = 'trove_auth_user';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as AuthUser;
      }
    } catch (error) {
      console.error('Failed to parse stored user', error);
    }
    return null;
  });

  const isAuthenticated = !!user;

  const login = (loginUser: AuthUser, token?: string) => {
    setUser(loginUser);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loginUser));
    if (token) {
      localStorage.setItem('trove_auth_token', token);
    }

    // After successful login, navigate back to the previous route (e.g., the protected page)
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    localStorage.removeItem('trove_auth_token');
  };

  // Keep local storage and state in sync in case of multi-tab logout/login
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEY) {
        setUser(e.newValue ? (JSON.parse(e.newValue) as AuthUser) : null);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

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