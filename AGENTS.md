# SONU Blog

React + TypeScript + Vite SPA, routed with React Router, styled with Tailwind CSS.

- Commands: `bun run dev`, `bun run build` (tsc + vite build), `bun run lint`
- Routes live under a language prefix: `/:lang/...` with `lang` in `ko | ja` (`src/lib/i18n.ts`). `/` redirects to `/ko`.
- UI strings: add to both `ko` and `ja` in `src/lib/i18n.ts`; post text is per-language in `src/lib/posts.ts`.
- Deploy: Vercel, `vercel.json` rewrites every path to `index.html`.
- Git: never run `git commit`, `git push`, or any other command that creates commits or updates a remote. The user handles these.
