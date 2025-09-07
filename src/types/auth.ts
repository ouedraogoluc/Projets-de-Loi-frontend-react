
export type UserRole = 'admin' | 'ministere_initiateur' | 'sgg_cm' | 'mjdhri';

export type UserStructure = 'administration' | 'ministere_initiateur' | 'sgg_cm' | 'mjdhri';

export interface User {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: UserRole;
  structure: UserStructure;
  ministere?: string; // Pour les ministères initiateurs
  service?: string; // Service spécifique dans la structure
  dateCreation: string;
  dernierConnexion?: string;
  actif: boolean;
}

export interface AuthContext {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}
