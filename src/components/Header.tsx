import { Link } from "@tanstack/react-router";
import { Code, FileText, Home, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

		setIsDark(shouldBeDark);
		document.documentElement.setAttribute(
			"data-theme",
			shouldBeDark ? "dark" : "light",
		);
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);
		document.documentElement.setAttribute(
			"data-theme",
			newTheme ? "dark" : "light",
		);
		localStorage.setItem("theme", newTheme ? "dark" : "light");
	};

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
			<div className="container mx-auto px-4">
				<nav className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-8">
						<Link
							to="/"
							className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							<Code size={24} />
							<span>Tech Blog</span>
						</Link>

						<div className="hidden md:flex items-center space-x-6">
							<Link
								to="/"
								className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								activeProps={{
									className: "text-blue-600 dark:text-blue-400 font-medium",
								}}
							>
								<Home size={16} />
								<span>Home</span>
							</Link>

							<Link
								to="/posts"
								className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
								activeProps={{
									className: "text-blue-600 dark:text-blue-400 font-medium",
								}}
							>
								<FileText size={16} />
								<span>Posts</span>
							</Link>
						</div>
					</div>

					<div className="flex items-center space-x-4">
						<button
							type="button"
							onClick={toggleTheme}
							className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							aria-label="Toggle theme"
						>
							{isDark ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
