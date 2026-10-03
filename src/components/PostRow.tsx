import { Link } from "react-router";
import type { Post } from "@/lib/posts";
import { useLang } from "@/lib/i18n";

export function PostRow({ post }: { post: Post }) {
	const lang = useLang();
	const text = post.text[lang];

	return (
		<li className="grid gap-2 py-6 md:grid-cols-[8rem_1fr] md:gap-8">
			<time dateTime={post.date} className="font-mono text-sm text-muted">
				{post.date}
			</time>
			<div className="grid gap-2">
				<h3 className="text-lg font-medium tracking-tight">
					<Link to={`/${lang}/posts/${post.slug}`} className="hover:underline">
						{text.title}
					</Link>
				</h3>
				<p className="max-w-[65ch] leading-relaxed text-muted">{text.summary}</p>
				<p className="flex flex-wrap gap-3 text-sm text-accent">
					{post.tags.map((t) => (
						<span key={t}>#{t}</span>
					))}
				</p>
			</div>
		</li>
	);
}
