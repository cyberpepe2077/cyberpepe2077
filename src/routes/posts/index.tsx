import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, Tag } from "lucide-react";
import { posts } from "../../lib/posts";

export const Route = createFileRoute("/posts/")({
	component: Posts,
});

function Posts() {
	return (
		<div>
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-foreground mb-1.5 tracking-tight">
					글 목록
				</h1>
				<p className="text-muted-foreground text-sm">
					{posts.length}편의 글이 있습니다
				</p>
			</div>

			<div className="divide-y divide-border">
				{posts.map((post) => (
					<article key={post.slug} className="py-6 group">
						<Link
							to="/posts/$slug"
							params={{ slug: post.slug }}
							className="block"
						>
							<div className="flex items-center gap-2 mb-2">
								<span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
									{post.category}
								</span>
							</div>

							<h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/70 transition-colors mb-1.5">
								{post.title}
							</h2>

							<p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
								{post.excerpt}
							</p>

							<div className="flex items-center gap-4">
								<div className="flex items-center gap-4 text-xs text-muted-foreground">
									<span className="flex items-center gap-1">
										<Calendar size={12} />
										{new Date(post.date).toLocaleDateString("ko-KR")}
									</span>
									<span className="flex items-center gap-1">
										<Clock size={12} />
										{post.readTime}분
									</span>
								</div>

								<div className="flex flex-wrap gap-1.5">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="inline-flex items-center gap-1 text-xs text-muted-foreground"
										>
											<Tag size={10} />
											{tag}
										</span>
									))}
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</div>
	);
}
