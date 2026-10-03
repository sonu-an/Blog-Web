import { Link, useParams } from "react-router";
import { posts } from "@/lib/posts";
import { NotFound } from "@/pages/NotFound";
import { useLang, useT } from "@/lib/i18n";

export function PostDetail() {
	const lang = useLang();
	const t = useT();
	const { slug } = useParams();
	const post = posts.find((p) => p.slug === slug);
	if (!post) return <NotFound />;
	const text = post.text[lang];

	return (
		<article className="py-16">
			<title>{`${text.title} | SONU Blog`}</title>
			<meta name="description" content={text.summary} />
			<Link
				to={`/${lang}/posts?category=${encodeURIComponent(post.category)}`}
				className="text-sm text-accent hover:underline"
			>
				{post.category}
			</Link>
			<h1 className="mt-3 text-4xl font-semibold tracking-tighter">{text.title}</h1>
			<time dateTime={post.date} className="mt-3 block font-mono text-sm text-muted">
				{post.date}
			</time>
			<div className="mt-10 grid max-w-[65ch] gap-6 leading-relaxed">
				{text.content.split("\n\n").map((para, i) => (
					<p key={i}>{para}</p>
				))}
			</div>
			<Link to={`/${lang}/posts`} className="mt-16 inline-block text-sm text-muted hover:text-fg">
				{t.posts.back}
			</Link>
		</article>
	);
}
