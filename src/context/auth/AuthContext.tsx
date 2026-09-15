import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { AuthUser, PublicProfile } from "../../types";
import {
  getSessionUserId,
  getUsers,
  hashPassword,
  saveUsers,
  setSessionUserId,
} from "./authStorage";
import { AuthContext, type AuthContextValue } from "./authContextDef";

function toPublicProfile(user: AuthUser): PublicProfile {
  const publicProfile: Partial<AuthUser> = { ...user };
  delete publicProfile.passwordHash;
  return publicProfile as PublicProfile;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<AuthUser[]>(() => getUsers());
  const [sessionUserId, setSessionUserIdState] = useState<string | null>(() =>
    getSessionUserId()
  );

  useEffect(() => {
    saveUsers(users);
  }, [users]);

  const user = useMemo(() => {
    const found = users.find((u) => u.id === sessionUserId);
    return found ? toPublicProfile(found) : null;
  }, [users, sessionUserId]);

  const register: AuthContextValue["register"] = ({
    fullName,
    email,
    password,
    memberType,
    graduationYear,
    discipline,
  }) => {
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((u) => u.email.toLowerCase() === normalizedEmail)) {
      return { ok: false, error: "An account with this email already exists." };
    }

    const newUser: AuthUser = {
      id: `u${Date.now()}`,
      fullName: fullName.trim(),
      email: normalizedEmail,
      passwordHash: hashPassword(password),
      memberType,
      graduationYear,
      discipline,
      createdAt: new Date().toISOString(),
    };

    setUsers((prev) => [...prev, newUser]);
    setSessionUserId(newUser.id);
    setSessionUserIdState(newUser.id);

    return { ok: true };
  };

  const login: AuthContextValue["login"] = (email, password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const found = users.find((u) => u.email.toLowerCase() === normalizedEmail);

    if (!found || found.passwordHash !== hashPassword(password)) {
      return { ok: false, error: "Incorrect email or password." };
    }

    setSessionUserId(found.id);
    setSessionUserIdState(found.id);
    return { ok: true };
  };

  const logout = () => {
    setSessionUserId(null);
    setSessionUserIdState(null);
  };

  const updateProfile: AuthContextValue["updateProfile"] = (updates) => {
    if (!sessionUserId) return;
    setUsers((prev) =>
      prev.map((u) => (u.id === sessionUserId ? { ...u, ...updates } : u))
    );
  };

  const getMentorUsers = () =>
    users.filter((u) => u.isMentor).map(toPublicProfile);

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    updateProfile,
    getMentorUsers,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
