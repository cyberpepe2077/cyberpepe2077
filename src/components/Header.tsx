import { Link } from "@tanstack/react-router";
import { FileText, FolderOpen, Home, Moon, PenLine, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
		setIsDark(shouldBeDark);
		document.documentElement.classList.toggle("dark", shouldBeDark);
	}, []);

	const toggleTheme = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	};

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
			<div className="container mx-auto px-4 max-w-4xl">
				<nav className="flex items-center justify-between h-14">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-2 font-semibold text-foreground hover:text-foreground/80 transition-colors"
					>
						<PenLine size={18} />
						<span>Tech Blog</span>
					</Link>

					{/* Nav */}
					<div className="flex items-center gap-1">
						<Link
							to="/"
							className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
							activeProps={{ className: "text-foreground bg-accent" }}
							activeOptions={{ exact: true }}
						>
							<Home size={14} />
							<span className="hidden sm:inline">홈</span>
						</Link>

						<Link
							to="/posts"
							className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
							activeProps={{ className: "text-foreground bg-accent" }}
						>
							<FileText size={14} />
							<span className="hidden sm:inline">글</span>
						</Link>

						<Link
							to="/projects"
							className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
							activeProps={{ className: "text-foreground bg-accent" }}
						>
							<FolderOpen size={14} />
							<span className="hidden sm:inline">프로젝트</span>
						</Link>

						<Link
							to="/about"
							className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
							activeProps={{ className: "text-foreground bg-accent" }}
						>
							<User size={14} />
							<span className="hidden sm:inline">소개</span>
						</Link>

						<div className="w-px h-4 bg-border mx-1" />

						<button
							type="button"
							onClick={toggleTheme}
							className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
							aria-label="Toggle theme"
						>
							{isDark ? <Sun size={16} /> : <Moon size={16} />}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
