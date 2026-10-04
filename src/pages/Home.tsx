import { Link } from "react-router";
import { posts } from "@/lib/posts";
import { PostRow } from "@/components/PostRow";
import { useLang, useT } from "@/lib/i18n";

export function Home() {
	const lang = useLang();
	const t = useT();

	return (
		<>
			<title>SONU Blog</title>
			<section className="grid items-center gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
				<div className="grid gap-6">
					<h1 className="text-4xl font-semibold leading-tight tracking-tighter md:text-6xl">
						{t.home.heroTitle}
					</h1>
					<p className="max-w-[45ch] text-lg leading-relaxed text-muted">
						{t.home.description}
					</p>
					<div className="flex gap-3">
						<Link
							to={`/${lang}/posts`}
							className="rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition active:scale-[0.98]"
						>
							{t.home.viewPosts}
						</Link>
						<Link
							to={`/${lang}/about`}
							className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition hover:border-muted active:scale-[0.98]"
						>
							{t.nav.about}
						</Link>
					</div>
				</div>
				<img
					src="/john.jpg"
					alt={t.home.photoAlt}
					width={1440}
					height={1540}
					fetchPriority="high"
					className="aspect-[4/5] w-full rounded-md object-cover"
				/>
			</section>

			<section className="border-t border-line py-16">
				<div className="flex items-baseline justify-between">
					<h2 className="text-2xl font-semibold tracking-tight">{t.home.recent}</h2>
					<Link to={`/${lang}/posts`} className="text-sm text-accent hover:underline">
						{t.home.viewAll}
					</Link>
				</div>
				<ul className="divide-y divide-line">
					{posts.slice(0, 3).map((p) => (
						<PostRow key={p.slug} post={p} />
					))}
				</ul>
			</section>
		</>
	);
}
