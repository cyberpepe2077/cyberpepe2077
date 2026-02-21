import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/projects")({
	component: Projects,
});

const statusLabel: Record<string, string> = {
	active: "운영 중",
	wip: "개발 중",
	archived: "완료",
};

const statusStyle: Record<string, string> = {
	active: "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
	wip: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
	archived: "text-muted-foreground border-border",
};

function Projects() {
	return (
		<div>
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-foreground mb-1.5 tracking-tight">
					프로젝트
				</h1>
				<p className="text-muted-foreground text-sm">
					개인적으로 진행했거나 진행 중인 프로젝트들입니다
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-2">
				{projects.map((project) => (
					<div
						key={project.name}
						className="p-5 rounded-lg border border-border bg-card flex flex-col gap-3"
					>
						{/* Header */}
						<div className="flex items-start justify-between gap-2">
							<h2 className="font-semibold text-foreground text-sm leading-snug">
								{project.name}
							</h2>
							<span
								className={`shrink-0 text-xs px-2 py-0.5 rounded border ${statusStyle[project.status]}`}
							>
								{statusLabel[project.status]}
							</span>
						</div>

						{/* Description */}
						<p className="text-xs text-muted-foreground leading-relaxed flex-1">
							{project.description}
						</p>

						{/* Tags */}
						<div className="flex flex-wrap gap-1.5">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
								>
									{tag}
								</span>
							))}
						</div>

						{/* Links */}
						{(project.github ?? project.demo) && (
							<div className="flex items-center gap-3 pt-1 border-t border-border">
								{project.github && (
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
									>
										<Github size={13} />
										GitHub
									</a>
								)}
								{project.demo && (
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
									>
										<ExternalLink size={13} />
										Demo
									</a>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
