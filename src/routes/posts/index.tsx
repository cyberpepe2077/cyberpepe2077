import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, Tag } from "lucide-react";
import { posts } from "../../mock/posts";

export const Route = createFileRoute("/posts/")({
	component: Posts,
});

function Posts() {
	return (
		<div>
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
					Tech Blog
				</h1>
				<p className="text-gray-600 dark:text-gray-300">
					프론트엔드 개발자가 꾸리는 기술 블로그
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{posts.map((post) => (
					<article
						key={post.id}
						className="card hover:shadow-lg transition-all duration-200 group cursor-pointer"
					>
						<Link
							to="/posts/$postId"
							params={{ postId: post.id.toString() }}
							className="block h-full"
						>
							<div className="flex flex-col h-full">
								<div className="flex-1">
									<div className="flex items-center gap-2 mb-3">
										<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
											{post.category}
										</span>
									</div>

									<h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
										{post.title}
									</h2>

									<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
										{post.excerpt}
									</p>
								</div>

								<div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
									<div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
										<div className="flex items-center gap-4">
											<div className="flex items-center gap-1">
												<Calendar size={12} />
												<span>
													{new Date(post.date).toLocaleDateString("ko-KR")}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<Clock size={12} />
												<span>{post.readTime}분</span>
											</div>
										</div>
									</div>

									<div className="flex flex-wrap gap-1 mt-3">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded"
											>
												<Tag size={10} />
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</div>
	);
}
