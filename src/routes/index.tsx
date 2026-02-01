import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Code, Terminal, Zap } from "lucide-react";
import { posts } from "../mock/posts";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const recentPosts = posts.slice(0, 3);

	return (
		<div>
			<section className="text-center mb-16">
				<h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
					안녕하세요, 개발자입니다
				</h1>
				<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
					프론트엔드 개발과 웹 기술에 대한 깊이 있는 이야기를 나누는 테크
					블로그입니다. React, TypeScript, CSS 등 현대적인 웹 개발 기술들을
					탐구합니다.
				</p>
				<Link to="/posts" className="btn inline-flex items-center gap-2">
					글 보러가기
					<ArrowRight size={16} />
				</Link>
			</section>

			<section className="grid md:grid-cols-3 gap-8 mb-16">
				<div className="card text-center">
					<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
						<Code className="text-blue-600 dark:text-blue-400" size={24} />
					</div>
					<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
						깔끔한 코드
					</h3>
					<p className="text-gray-600 dark:text-gray-300 text-sm">
						가독성 좋고 유지보수 쉬운 코드 작성법을 공유합니다
					</p>
				</div>

				<div className="card text-center">
					<div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
						<Zap className="text-green-600 dark:text-green-400" size={24} />
					</div>
					<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
						최신 기술
					</h3>
					<p className="text-gray-600 dark:text-gray-300 text-sm">
						React 18, Next.js, 최신 CSS 등을 다룹니다
					</p>
				</div>

				<div className="card text-center">
					<div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
						<Terminal
							className="text-purple-600 dark:text-purple-400"
							size={24}
						/>
					</div>
					<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
						실용적인 예제
					</h3>
					<p className="text-gray-600 dark:text-gray-300 text-sm">
						바로 적용할 수 있는 실용적인 코드 예제를 제공합니다
					</p>
				</div>
			</section>

			<section className="mb-16">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
						<BookOpen size={24} />
						최근 글
					</h2>
					<Link
						to="/posts"
						className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
					>
						모든 글 보기
					</Link>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{recentPosts.map((post) => (
						<article
							key={post.id}
							className="card hover:shadow-lg transition-all duration-200 group"
						>
							<Link
								to="/posts/$postId"
								params={{ postId: post.id.toString() }}
								className="block"
							>
								<div className="mb-3">
									<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
										{post.category}
									</span>
								</div>

								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
									{post.title}
								</h3>

								<p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
									{post.excerpt}
								</p>

								<div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
									<span>{new Date(post.date).toLocaleDateString("ko-KR")}</span>
									<span>•</span>
									<span>{post.readTime}분 읽기</span>
								</div>
							</Link>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
