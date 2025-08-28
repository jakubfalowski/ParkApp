import {
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { authStorage } from "@services/auth-storage";
import { AuthContext, type AuthState } from "./auth-context";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = authStorage.get();
    if (saved) setToken(saved);
  }, []);

  const login = useCallback((t: string) => {
    authStorage.set(t);
    setToken(t);
  }, []);

  const logout = useCallback(() => {
    authStorage.clear();
    setToken(null);
  }, []);

  const refresh = useCallback(() => {
    const saved = authStorage.get();
    setToken(saved);
  }, []);

  const value = useMemo<AuthState>(
    () => ({ token, isAuthenticated: !!token, login, logout, refresh }),
    [token, login, logout, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
