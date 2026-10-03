import { useParams } from "react-router";

export const langs = ["ko", "ja"] as const;
export type Lang = (typeof langs)[number];

export const langLabels: Record<Lang, string> = { ko: "한국어", ja: "日本語" };

export function isLang(value: string | undefined): value is Lang {
	return langs.includes(value as Lang);
}

// Falls back to ko so pages rendered under an invalid prefix (404) still have strings.
export function useLang(): Lang {
	const { lang } = useParams();
	return isLang(lang) ? lang : "ko";
}

const ko = {
	nav: { posts: "글", about: "소개", login: "로그인", logout: "로그아웃" },
	home: {
		heroLine1: "만들고, 부딪히고,",
		heroLine2: "기록합니다.",
		description: "React, Go, Java로 무언가를 만들며 배운 것들을 정리하는 개인 블로그입니다.",
		viewPosts: "글 보기",
		photoAlt: "작업 공간 사진",
		recent: "최근 글",
		viewAll: "전체 보기",
	},
	posts: {
		title: "글",
		count: (n: number) => `총 ${n}개의 글`,
		all: "전체",
		empty: "아직 작성된 글이 없습니다.",
		back: "← 목록으로",
	},
	about: {
		title: "소개",
		photoAlt: "프로필 사진",
		name: "안선우",
		bio: "프론트엔드와 백엔드를 오가며 일하는 개발자입니다. 이 블로그에는 직접 만들면서 배운 것, 헷갈렸던 것, 다시 찾아볼 것들을 기록합니다.",
	},
	login: {
		title: "로그인",
		email: "이메일",
		password: "비밀번호",
		submit: "로그인",
		pending: "로그인 중",
		error: "이메일과 비밀번호를 입력하세요.",
	},
	notFound: { title: "페이지를 찾을 수 없습니다", home: "홈으로" },
};

const ja: typeof ko = {
	nav: { posts: "記事", about: "紹介", login: "ログイン", logout: "ログアウト" },
	home: {
		heroLine1: "作って、ぶつかって、",
		heroLine2: "記録します。",
		description: "React、Go、Javaで何かを作りながら学んだことをまとめる個人ブログです。",
		viewPosts: "記事を見る",
		photoAlt: "作業スペースの写真",
		recent: "最近の記事",
		viewAll: "すべて見る",
	},
	posts: {
		title: "記事",
		count: (n: number) => `全${n}件の記事`,
		all: "すべて",
		empty: "まだ記事がありません。",
		back: "← 一覧へ",
	},
	about: {
		title: "紹介",
		photoAlt: "プロフィール写真",
		name: "アン・ソヌ",
		bio: "フロントエンドとバックエンドを行き来しながら働く開発者です。このブログには、実際に作りながら学んだこと、迷ったこと、あとで見返したいことを記録しています。",
	},
	login: {
		title: "ログイン",
		email: "メールアドレス",
		password: "パスワード",
		submit: "ログイン",
		pending: "ログイン中",
		error: "メールアドレスとパスワードを入力してください。",
	},
	notFound: { title: "ページが見つかりません", home: "ホームへ" },
};

export const dict: Record<Lang, typeof ko> = { ko, ja };

export function useT() {
	return dict[useLang()];
}
