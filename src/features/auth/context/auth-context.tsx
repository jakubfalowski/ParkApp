import { createContext } from "react";

export type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  login: (t: string) => void;
  logout: () => void;
  refresh: () => void;
};

export const AuthContext = createContext<AuthState | null>(null);
