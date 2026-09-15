import { createContext } from "react";
import type { AuthUser, PublicProfile, RegisterInput } from "../../types";

export interface AuthContextValue {
  user: PublicProfile | null;
  isAuthenticated: boolean;
  register: (input: RegisterInput) => { ok: boolean; error?: string };
  login: (email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
  updateProfile: (updates: Partial<AuthUser>) => void;
  getMentorUsers: () => PublicProfile[];
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);
