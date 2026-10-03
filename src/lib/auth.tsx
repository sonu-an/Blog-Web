import { createContext, useContext, useState, type ReactNode } from "react";

type User = { email: string };

type AuthContextValue = {
	user: User | null;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	// ponytail: client-only state, resets on refresh and verifies nothing.
	// Replace with POST /api/auth/login + httpOnly cookie when the blog server exists.
	async function login(email: string, password: string) {
		if (!email || !password) throw new Error("이메일과 비밀번호를 입력하세요.");
		setUser({ email });
	}

	return (
		<AuthContext.Provider value={{ user, login, logout: () => setUser(null) }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
