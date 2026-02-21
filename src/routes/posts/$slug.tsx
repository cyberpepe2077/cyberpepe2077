import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getPost, type Post } from "../../lib/posts";

export const Route = createFileRoute("/posts/$slug")({
	component: PostPage,
	loader: ({ params }): Post | undefined => getPost(params.slug),
});

function PostPage() {
	const post = Route.useLoaderData();

	if (!post) {
		return (
			<div className="text-center py-20">
				<h1 className="text-2xl font-bold text-foreground mb-3">
					게시물을 찾을 수 없습니다
				</h1>
				<p className="text-muted-foreground text-sm mb-6">
					요청하신 게시물이 존재하지 않습니다.
				</p>
				<Link
					to="/posts"
					className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm text-foreground hover:bg-accent transition-colors"
				>
					<ArrowLeft size={14} />
					목록으로
				</Link>
			</div>
		);
	}

	const Content = post.component;

	return (
		<article className="max-w-2xl mx-auto">
			{/* Back */}
			<div className="mb-8">
				<Link
					to="/posts"
					className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					<ArrowLeft size={14} />
					목록으로
				</Link>
			</div>

			{/* Header */}
			<header className="mb-8 pb-8 border-b border-border">
				<div className="mb-3">
					<span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
						{post.category}
					</span>
				</div>

				<h1 className="text-3xl font-bold text-foreground mb-4 leading-tight tracking-tight">
					{post.title}
				</h1>

				<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
					<span className="flex items-center gap-1.5">
						<Calendar size={14} />
						<time>
							{new Date(post.date).toLocaleDateString("ko-KR", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
					</span>
					<span className="flex items-center gap-1.5">
						<Clock size={14} />
						{post.readTime}분 읽기
					</span>
				</div>

				<div className="flex flex-wrap gap-2 mt-4">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center gap-1 text-xs text-muted-foreground"
						>
							<Tag size={11} />
							{tag}
						</span>
					))}
				</div>
			</header>

			{/* MDX Content */}
			<div className="prose">
				<Content />
			</div>

			{/* Footer */}
			<div className="mt-12 pt-6 border-t border-border flex justify-between items-center">
				<Link
					to="/posts"
					className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					<ArrowLeft size={14} />
					목록으로
				</Link>
				<span className="text-xs text-muted-foreground">
					{new Date(post.date).toLocaleDateString("ko-KR")}
				</span>
			</div>
		</article>
	);
}
