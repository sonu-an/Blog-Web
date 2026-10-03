import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";

// Wrap any page that should only be reachable after login.
export function RequireAuth({ children }: { children: ReactNode }) {
	const { user } = useAuth();
	const lang = useLang();
	return user ? children : <Navigate to={`/${lang}/login`} replace />;
}
