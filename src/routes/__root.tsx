import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Blog</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  ),
})
