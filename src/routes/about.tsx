import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail, Twitter } from "lucide-react";

export const Route = createFileRoute("/about")({
	component: About,
});

const skills = [
	{
		category: "Frontend",
		items: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vite"],
	},
	{
		category: "Backend",
		items: ["Node.js", "PostgreSQL", "Prisma", "REST API"],
	},
	{
		category: "Tools",
		items: ["Git", "pnpm", "Biome", "Figma", "VS Code"],
	},
];

function About() {
	return (
		<div className="max-w-2xl mx-auto">
			{/* Intro */}
			<section className="py-10 mb-10 border-b border-border">
				<div className="flex items-start gap-6">
					<div className="w-20 h-20 rounded-full bg-muted border border-border shrink-0 flex items-center justify-center text-2xl font-bold text-muted-foreground">
						G
					</div>
					<div>
						<h1 className="text-2xl font-bold text-foreground mb-1 tracking-tight">
							Gabriel Yoon
						</h1>
						<p className="text-muted-foreground text-sm mb-3">
							Frontend Developer
						</p>
						<p className="text-sm text-foreground/80 leading-relaxed">
							웹 기술을 탐구하고 그 과정을 기록합니다. React와 TypeScript를 주로
							사용하며, 사용자 경험과 개발자 경험 모두를 중요하게 생각합니다.
						</p>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section className="mb-10 pb-10 border-b border-border">
				<h2 className="text-base font-semibold text-foreground mb-5">
					기술 스택
				</h2>
				<div className="grid gap-4">
					{skills.map(({ category, items }) => (
						<div key={category} className="flex gap-4">
							<span className="text-xs text-muted-foreground w-20 shrink-0 pt-0.5">
								{category}
							</span>
							<div className="flex flex-wrap gap-1.5">
								{items.map((item) => (
									<span
										key={item}
										className="text-xs px-2 py-0.5 rounded border border-border text-foreground/80 bg-muted/50"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Contact */}
			<section>
				<h2 className="text-base font-semibold text-foreground mb-5">연락처</h2>
				<div className="flex flex-col gap-3">
					<a
						href="mailto:hello@example.com"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
					>
						<Mail size={15} />
						hello@example.com
					</a>
					<a
						href="https://github.com/cyberpepe2077"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
					>
						<Github size={15} />
						github.com/cyberpepe2077
					</a>
				</div>
			</section>
		</div>
	);
}
