import { useT } from "@/lib/i18n";

export function About() {
	const t = useT();

	return (
		<section className="grid gap-10 py-16 md:grid-cols-[1fr_1.5fr] md:py-24">
			<title>{`${t.about.title} | SONU Blog`}</title>
			{/* TODO: replace with your own profile photo */}
			<img
				src="https://picsum.photos/seed/sonu-blog-profile/700/800"
				alt={t.about.photoAlt}
				width={700}
				height={800}
				loading="lazy"
				className="aspect-[7/8] w-full rounded-md object-cover"
			/>
			<div className="grid content-start gap-6">
				<h1 className="text-4xl font-semibold tracking-tighter">{t.about.name}</h1>
				<p className="max-w-[65ch] leading-relaxed text-muted">
					{t.about.bio}
				</p>
				<dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
					<div>
						<dt className="text-sm text-muted">Frontend</dt>
						<dd className="mt-1">React, TypeScript, Next.js</dd>
					</div>
					<div>
						<dt className="text-sm text-muted">Backend</dt>
						<dd className="mt-1">Java, Go</dd>
					</div>
				</dl>
				{/* TODO: add contact link (email, GitHub) */}
			</div>
		</section>
	);
}
