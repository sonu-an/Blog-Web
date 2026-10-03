import { Link, useSearchParams } from "react-router";
import { categories, posts } from "@/lib/posts";
import { PostRow } from "@/components/PostRow";
import { useLang, useT } from "@/lib/i18n";

export function PostList() {
	const lang = useLang();
	const t = useT();
	const [searchParams] = useSearchParams();
	const active = searchParams.get("category") ?? undefined;
	const visible = active ? posts.filter((p) => p.category === active) : posts;

	return (
		<section className="py-16">
			<title>{`${t.posts.title} | SONU Blog`}</title>
			<h1 className="text-4xl font-semibold tracking-tighter">{t.posts.title}</h1>
			<p className="mt-3 text-muted">{t.posts.count(visible.length)}</p>
			<nav className="mt-8 flex flex-wrap gap-2 text-sm">
				{[undefined, ...categories].map((c) => (
					<Link
						key={c ?? "all"}
						to={c ? `/${lang}/posts?category=${encodeURIComponent(c)}` : `/${lang}/posts`}
						className={
							c === active
								? "rounded-md bg-fg px-3 py-1.5 text-bg"
								: "rounded-md border border-line px-3 py-1.5 text-muted transition hover:text-fg"
						}
					>
						{c ?? t.posts.all}
					</Link>
				))}
			</nav>
			{visible.length === 0 ? (
				<p className="py-16 text-muted">{t.posts.empty}</p>
			) : (
				<ul className="mt-4 divide-y divide-line">
					{visible.map((p) => (
						<PostRow key={p.slug} post={p} />
					))}
				</ul>
			)}
		</section>
	);
}
