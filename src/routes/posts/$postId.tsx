import { createFileRoute } from '@tanstack/react-router';
import { posts } from '../../mock/posts';

export const Route = createFileRoute('/posts/$postId')({
  component: Post,
  loader: ({ params }) => posts.find(p => p.id === parseInt(params.postId, 10)),
});

function Post() {
  const post = Route.useLoaderData();

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
