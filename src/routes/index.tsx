import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Code, Terminal, Zap } from "lucide-react";
import { posts } from "../lib/posts";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const recentPosts = posts.slice(0, 3);

	return (
		<div>
			{/* Hero */}
			<section className="py-12 mb-12 border-b border-border">
				<h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
					안녕하세요, 개발자입니다
				</h1>
				<p className="text-muted-foreground text-lg mb-6 max-w-xl leading-relaxed">
					프론트엔드 개발과 웹 기술에 대한 이야기를 나눕니다. React,
					TypeScript, CSS 등 현대 웹 개발을 탐구합니다.
				</p>
				<Link
					to="/posts"
					className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
				>
					글 목록 보기
					<ArrowRight size={15} />
				</Link>
			</section>

			{/* Features */}
			<section className="grid md:grid-cols-3 gap-4 mb-14">
				{[
					{
						icon: <Code size={20} />,
						title: "깔끔한 코드",
						desc: "가독성 좋고 유지보수 쉬운 코드 작성법을 공유합니다",
					},
					{
						icon: <Zap size={20} />,
						title: "최신 기술",
						desc: "React, TypeScript, 최신 CSS 트렌드를 다룹니다",
					},
					{
						icon: <Terminal size={20} />,
						title: "실용적인 예제",
						desc: "바로 적용할 수 있는 코드 예제를 제공합니다",
					},
				].map(({ icon, title, desc }) => (
					<div
						key={title}
						className="p-5 rounded-lg border border-border bg-card"
					>
						<div className="text-muted-foreground mb-3">{icon}</div>
						<h3 className="font-semibold text-foreground text-sm mb-1.5">
							{title}
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{desc}
						</p>
					</div>
				))}
			</section>

			{/* Recent Posts */}
			<section>
				<div className="flex items-center justify-between mb-5">
					<h2 className="font-semibold text-foreground flex items-center gap-2">
						<BookOpen size={18} />
						최근 글
					</h2>
					<Link
						to="/posts"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						모두 보기 →
					</Link>
				</div>

				<div className="divide-y divide-border">
					{recentPosts.map((post) => (
						<article key={post.slug} className="py-5 group">
							<Link
								to="/posts/$slug"
								params={{ slug: post.slug }}
								className="block"
							>
								<div className="flex items-center gap-2 mb-1.5">
									<span className="text-xs text-muted-foreground px-2 py-0.5 rounded border border-border">
										{post.category}
									</span>
									<span className="text-xs text-muted-foreground">
										{new Date(post.date).toLocaleDateString("ko-KR")}
									</span>
									<span className="text-xs text-muted-foreground">
										· {post.readTime}분
									</span>
								</div>
								<h3 className="font-semibold text-foreground group-hover:text-foreground/70 transition-colors mb-1">
									{post.title}
								</h3>
								<p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
									{post.excerpt}
								</p>
							</Link>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
