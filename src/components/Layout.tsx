import { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { isLang, useLang } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { NotFound } from "@/pages/NotFound";

export function Layout() {
	const params = useParams();
	const lang = useLang();

	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);

	return (
		<>
			<Nav />
			<main className="mx-auto w-full max-w-5xl flex-1 px-4 md:px-8">
				{isLang(params.lang) ? <Outlet /> : <NotFound />}
			</main>
			<footer className="mx-auto w-full max-w-5xl px-4 py-10 text-sm text-muted md:px-8">© 2026 SONU</footer>
		</>
	);
}
