import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export function Layout() {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
			<Header />
			<main className="container mx-auto px-4 py-8">
				<Outlet />
			</main>
		</div>
	);
}
