import { createFileRoute, Link } from '@tanstack/react-router';
import { posts } from '../../mock/posts';

export const Route = createFileRoute('/posts/')({
  component: Posts,
});

function Posts() {
  return (
    <div>
      <h1>블로그 게시물</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
