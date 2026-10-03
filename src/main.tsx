import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AuthProvider } from "@/lib/auth";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { PostList } from "@/pages/PostList";
import { PostDetail } from "@/pages/PostDetail";
import { About } from "@/pages/About";
import { Login } from "@/pages/Login";
import { NotFound } from "@/pages/NotFound";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Navigate to="/ko" replace />} />
					<Route path=":lang" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="posts" element={<PostList />} />
						<Route path="posts/:slug" element={<PostDetail />} />
						<Route path="about" element={<About />} />
						<Route path="login" element={<Login />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
);
