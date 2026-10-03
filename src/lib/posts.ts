import type { Lang } from "@/lib/i18n";

type PostText = {
	title: string;
	summary: string;
	// Paragraphs separated by a blank line
	content: string;
};

export type Post = {
	slug: string;
	date: string;
	category: string;
	tags: string[];
	text: Record<Lang, PostText>;
};

// ponytail: local dummy data, swap for GET /api/posts once the blog server exists
export const posts: Post[] = [
	{
		slug: "nextjs-app-router-notes",
		date: "2026-09-28",
		category: "Frontend",
		tags: ["Next.js", "React"],
		text: {
			ko: {
				title: "Next.js App Router 정리",
				summary: "Server Component와 Client Component의 경계를 어디에 두는지 정리했습니다.",
				content: "App Router에서는 모든 컴포넌트가 기본적으로 Server Component입니다. 상태나 브라우저 API가 필요할 때만 \"use client\"를 선언합니다.\n\n경계는 최대한 트리의 아래쪽, 상호작용이 필요한 잎사귀 컴포넌트에 두는 것이 좋습니다. 그래야 번들에 포함되는 JS가 줄어듭니다.",
			},
			ja: {
				title: "Next.js App Router まとめ",
				summary: "Server ComponentとClient Componentの境界をどこに置くかを整理しました。",
				content: "App Routerでは、すべてのコンポーネントがデフォルトでServer Componentです。状態やブラウザAPIが必要なときだけ\"use client\"を宣言します。\n\n境界はできるだけツリーの下の方、インタラクションが必要な末端のコンポーネントに置くのがよいです。そうすることでバンドルに含まれるJSが減ります。",
			},
		},
	},
	{
		slug: "go-http-server",
		date: "2026-09-14",
		category: "Backend",
		tags: ["Go", "Backend"],
		text: {
			ko: {
				title: "Go로 작은 HTTP 서버 만들기",
				summary: "표준 라이브러리 net/http 만으로 블로그 API 서버의 뼈대를 세워봅니다.",
				content: "net/http 패키지만으로도 라우팅, 미들웨어, JSON 응답까지 충분히 처리할 수 있습니다.\n\nGo 1.22부터는 ServeMux가 메서드와 경로 파라미터를 지원해서 외부 라우터 없이도 REST API를 깔끔하게 작성할 수 있습니다.",
			},
			ja: {
				title: "Goで小さなHTTPサーバーを作る",
				summary: "標準ライブラリのnet/httpだけでブログAPIサーバーの骨組みを作ってみます。",
				content: "net/httpパッケージだけでも、ルーティング、ミドルウェア、JSONレスポンスまで十分に扱えます。\n\nGo 1.22からはServeMuxがメソッドとパスパラメータに対応したため、外部ルーターなしでもREST APIをすっきり書けます。",
			},
		},
	},
	{
		slug: "typescript-strict",
		date: "2026-08-30",
		category: "Frontend",
		tags: ["TypeScript"],
		text: {
			ko: {
				title: "TypeScript strict 모드를 켜야 하는 이유",
				summary: "strict 옵션이 잡아주는 실수들과, 켜는 순간 마주하는 에러들을 다룹니다.",
				content: "strict 모드는 strictNullChecks, noImplicitAny 등 여러 검사를 한 번에 켜줍니다.\n\n처음 켜면 에러가 쏟아지지만, 대부분은 런타임에 터질 수 있었던 실제 버그입니다. 새 프로젝트라면 처음부터 켜두는 것을 권합니다.",
			},
			ja: {
				title: "TypeScriptのstrictモードを有効にすべき理由",
				summary: "strictオプションが防いでくれるミスと、有効にした瞬間に出会うエラーを扱います。",
				content: "strictモードはstrictNullChecksやnoImplicitAnyなど、複数のチェックを一度に有効にします。\n\n最初はエラーが大量に出ますが、そのほとんどは実行時に起こり得た本物のバグです。新しいプロジェクトなら最初から有効にしておくことをおすすめします。",
			},
		},
	},
	{
		slug: "java-records",
		date: "2026-08-11",
		category: "Backend",
		tags: ["Java"],
		text: {
			ko: {
				title: "Java Record로 DTO 줄이기",
				summary: "Lombok 없이 Record만으로 불변 DTO를 만드는 방법을 정리했습니다.",
				content: "Record는 불변 데이터 클래스를 한 줄로 선언할 수 있게 해줍니다. equals, hashCode, toString이 자동으로 생성됩니다.\n\nDTO처럼 데이터를 나르기만 하는 클래스라면 Lombok 없이 Record로 충분합니다.",
			},
			ja: {
				title: "Java RecordでDTOを減らす",
				summary: "LombokなしでRecordだけを使って不変DTOを作る方法をまとめました。",
				content: "Recordを使うと、不変のデータクラスを1行で宣言できます。equals、hashCode、toStringは自動で生成されます。\n\nDTOのようにデータを運ぶだけのクラスなら、LombokなしでRecordだけで十分です。",
			},
		},
	},
];

export const categories = [...new Set(posts.map((p) => p.category))];
