import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useAuth } from "@/lib/auth";
import { type Lang, langLabels, langs, useLang, useT } from "@/lib/i18n";

export function Nav() {
	const { user, logout } = useAuth();
	const lang = useLang();
	const t = useT();
	const { pathname, search } = useLocation();
	const otherLang: Lang = lang === "ko" ? "ja" : "ko";
	const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");

	function toggleTheme() {
		const next = dark ? "light" : "dark";
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem("theme", next);
		} catch {
			// Storage blocked: theme still applies for this page view
		}
		setDark(!dark);
	}
	const links = [
		{ href: `/${lang}/posts`, label: t.nav.posts },
		{ href: `/${lang}/about`, label: t.nav.about },
	];

	return (
		<header className="border-b border-line">
			<nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-8">
				<Link to={`/${lang}`} className="font-semibold tracking-tight">
					SONU
				</Link>
				<div className="flex items-center gap-4 text-sm sm:gap-6">
					{links.map((l) => (
						<NavLink
							key={l.href}
							to={l.href}
							className={({ isActive }) => (isActive ? "text-fg" : "text-muted transition-colors hover:text-fg")}
						>
							{l.label}
						</NavLink>
					))}
					{user ? (
						<button onClick={logout} className="text-muted transition-colors hover:text-fg">
							{t.nav.logout}
						</button>
					) : (
						<Link to={`/${lang}/login`} className="text-muted transition-colors hover:text-fg">
							{t.nav.login}
						</Link>
					)}
					<Link
						// Swap only the language segment, keep the rest of the path and query
						to={`/${[otherLang, ...pathname.split("/").slice(2)].join("/")}${search}`}
						lang={otherLang}
						aria-label={langLabels[otherLang]}
						className="relative grid h-7 grid-cols-2 items-center rounded-full border border-line p-0.5 text-xs font-medium"
					>
						<span
							aria-hidden
							className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-fg transition-transform ${lang === "ja" ? "translate-x-full" : ""}`}
						/>
						{langs.map((l) => (
							<span
								key={l}
								aria-hidden
								className={`relative px-2 text-center transition-colors ${l === lang ? "text-bg" : "text-muted"}`}
							>
								{l.toUpperCase()}
							</span>
						))}
					</Link>
					<button
						type="button"
						role="switch"
						aria-checked={dark}
						aria-label={t.nav.darkMode}
						onClick={toggleTheme}
						className="h-7 w-12 rounded-full border border-line p-0.5"
					>
						<span
							className={`grid size-[22px] place-items-center rounded-full bg-fg text-bg transition-transform ${dark ? "translate-x-5" : ""}`}
						>
							<svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
								{dark ? (
									<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
								) : (
									<>
										<circle cx="12" cy="12" r="4" />
										<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
									</>
								)}
							</svg>
						</span>
					</button>
				</div>
			</nav>
		</header>
	);
}
