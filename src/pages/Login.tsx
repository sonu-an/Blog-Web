import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/lib/auth";
import { useLang, useT } from "@/lib/i18n";

export function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const lang = useLang();
	const t = useT();
	const [error, setError] = useState("");
	const [pending, setPending] = useState(false);

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		setPending(true);
		setError("");
		try {
			await login(String(form.get("email")), String(form.get("password")));
			navigate(`/${lang}`);
		} catch {
			setError(t.login.error);
			setPending(false);
		}
	}

	return (
		<section className="mx-auto grid max-w-sm gap-8 py-16 md:py-24">
			<title>{`${t.login.title} | SONU Blog`}</title>
			<h1 className="text-3xl font-semibold tracking-tighter">{t.login.title}</h1>
			<form onSubmit={onSubmit} className="grid gap-5">
				<div className="grid gap-2">
					<label htmlFor="email" className="text-sm font-medium">
						{t.login.email}
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						autoComplete="email"
						className="rounded-md border border-line bg-transparent px-3 py-2 outline-none focus:border-accent"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="password" className="text-sm font-medium">
						{t.login.password}
					</label>
					<input
						id="password"
						name="password"
						type="password"
						required
						autoComplete="current-password"
						className="rounded-md border border-line bg-transparent px-3 py-2 outline-none focus:border-accent"
					/>
				</div>
				{error && (
					<p role="alert" className="text-sm text-red-600 dark:text-red-400">
						{error}
					</p>
				)}
				<button
					type="submit"
					disabled={pending}
					className="rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition active:scale-[0.98] disabled:opacity-60"
				>
					{pending ? t.login.pending : t.login.submit}
				</button>
			</form>
		</section>
	);
}
