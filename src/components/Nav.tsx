import { Link, NavLink, useLocation } from "react-router";
import { useAuth } from "@/lib/auth";
import { langLabels, langs, useLang, useT } from "@/lib/i18n";

export function Nav() {
	const { user, logout } = useAuth();
	const lang = useLang();
	const t = useT();
	const { pathname, search } = useLocation();
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
				<div className="flex items-center gap-6 text-sm">
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
					<div className="flex gap-2">
						{langs.map((l) => (
							<Link
								key={l}
								// Swap only the language segment, keep the rest of the path and query
								to={`/${[l, ...pathname.split("/").slice(2)].join("/")}${search}`}
								lang={l}
								className={l === lang ? "text-fg" : "text-muted transition-colors hover:text-fg"}
							>
								{langLabels[l]}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
}
