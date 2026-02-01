import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { type Post as PostType, posts } from "../../mock/posts";

export const Route = createFileRoute("/posts/$postId")({
	component: Post,
	loader: ({ params }): PostType | undefined =>
		posts.find((p) => p.id === parseInt(params.postId, 10)),
});

function Post() {
	const post = Route.useLoaderData();

	if (!post) {
		return (
			<div className="text-center py-16">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
					게시물을 찾을 수 없습니다
				</h1>
				<p className="text-gray-600 dark:text-gray-300 mb-8">
					요청하신 게시물이 존재하지 않습니다.
				</p>
				<Link to="/posts" className="btn">
					게시물 목록으로 돌아가기
				</Link>
			</div>
		);
	}

	return (
		<article className="max-w-4xl mx-auto">
			<div className="mb-8">
				<Link
					to="/posts"
					className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6"
				>
					<ArrowLeft size={16} />
					게시물 목록으로
				</Link>

				<div className="mb-6">
					<span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded mb-4">
						{post.category}
					</span>

					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
						{post.title}
					</h1>

					<div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
						<div className="flex items-center gap-2">
							<Calendar size={16} />
							<time>
								{new Date(post.date).toLocaleDateString("ko-KR", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</time>
						</div>

						<div className="flex items-center gap-2">
							<Clock size={16} />
							<span>{post.readTime}분 읽기</span>
						</div>
					</div>

					<div className="flex flex-wrap gap-2 mt-4">
						{post.tags.map((tag) => (
							<span
								key={tag}
								className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
							>
								<Tag size={12} />
								{tag}
							</span>
						))}
					</div>
				</div>

				<hr className="border-gray-200 dark:border-gray-700" />
			</div>

			<div className="prose prose-lg max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-blockquote:border-l-blue-500 dark:prose-blockquote:border-l-blue-400">
				<pre>
					<code>{post.content}</code>
				</pre>
			</div>

			<div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
				<div className="text-center">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						이 글이 도움이 되셨나요?
					</h3>
					<div className="flex justify-center gap-4">
						<button type="button" className="btn-ghost">
							👍 좋아요
						</button>
						<Link to="/posts" className="btn-ghost">
							다른 글 보기
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
