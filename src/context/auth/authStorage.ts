import { getItem, setItem } from "../../utils/localStore";
import type { AuthUser } from "../../types";

const USERS_KEY = "nmu_alumni_users";
const SESSION_KEY = "nmu_alumni_session";

// Demo-only obfuscation, NOT real cryptographic hashing — this app has no
// backend, so there is no secure way to store credentials in the browser.
export function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash |= 0;
  }
  return `h${hash}`;
}

const DEMO_USER: AuthUser = {
  id: "demo-user",
  fullName: "Demo Alumnus",
  email: "demo@nmualumni.org",
  passwordHash: hashPassword("Demo@1234"),
  memberType: "Alumnus",
  graduationYear: "2022",
  discipline: "B.Sc. Nautical Science",
  currentRole: "Navigation Officer",
  company: "Nigerian Navy",
  location: "Lagos, Nigeria",
  bio: "This is a demo account seeded for exploring the NMU Alumni Network.",
  createdAt: new Date().toISOString(),
};

export function getUsers(): AuthUser[] {
  const users = getItem<AuthUser[]>(USERS_KEY, []);

  if (users.length === 0) {
    setItem(USERS_KEY, [DEMO_USER]);
    return [DEMO_USER];
  }

  return users;
}

export function saveUsers(users: AuthUser[]): void {
  setItem(USERS_KEY, users);
}

export function getSessionUserId(): string | null {
  return getItem<string | null>(SESSION_KEY, null);
}

export function setSessionUserId(id: string | null): void {
  setItem(SESSION_KEY, id);
}
