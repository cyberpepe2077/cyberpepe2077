import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export function Layout() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="container mx-auto px-4 py-10 max-w-4xl">
				<Outlet />
			</main>
		</div>
	);
}
