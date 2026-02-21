export interface Project {
	name: string;
	description: string;
	tags: string[];
	github?: string;
	demo?: string;
	status: "active" | "wip" | "archived";
}

export const projects: Project[] = [
	{
		name: "cyberpepe2077",
		description:
			"개인 기술 블로그. React 19, TanStack Router, MDX, Tailwind CSS v4로 제작.",
		tags: ["React", "TypeScript", "MDX", "TailwindCSS"],
		github: "https://github.com/cyberpepe2077/cyberpepe2077",
		demo: "https://cyberpepe2077.github.io/cyberpepe2077",
		status: "active",
	},
	{
		name: "Project Alpha",
		description: "프로젝트 설명을 여기에 작성하세요.",
		tags: ["Next.js", "TypeScript", "Prisma"],
		github: "https://github.com",
		status: "active",
	},
	{
		name: "Project Beta",
		description: "프로젝트 설명을 여기에 작성하세요.",
		tags: ["React", "Node.js", "PostgreSQL"],
		demo: "https://example.com",
		status: "wip",
	},
	{
		name: "Project Gamma",
		description: "프로젝트 설명을 여기에 작성하세요.",
		tags: ["Vue.js", "Vite", "Firebase"],
		github: "https://github.com",
		status: "archived",
	},
];
