
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContext as AuthContextType } from '@/types/auth';
import { mockUsers } from '@/data/mockUsers';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation de connexion - pour la démo, on accepte n'importe quel mot de passe
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'test123') {
      setUser({
        ...foundUser,
        dernierConnexion: new Date().toISOString()
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
