import { Link } from "react-router";
import { useLang, useT } from "@/lib/i18n";

export function NotFound() {
	const lang = useLang();
	const t = useT();

	return (
		<section className="py-16">
			<title>404 | SONU Blog</title>
			<h1 className="text-4xl font-semibold tracking-tighter">{t.notFound.title}</h1>
			<Link to={`/${lang}`} className="mt-6 inline-block text-sm text-accent hover:underline">
				{t.notFound.home}
			</Link>
		</section>
	);
}
