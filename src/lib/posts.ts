import type { ComponentType } from 'react'

export interface PostFrontmatter {
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  readTime: number
}

interface PostModule {
  frontmatter: PostFrontmatter
  default: ComponentType
}

export interface Post extends PostFrontmatter {
  slug: string
  component: ComponentType
}

const modules = import.meta.glob<PostModule>(
  '../content/posts/*.mdx',
  { eager: true },
)

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.replace('../content/posts/', '').replace('.mdx', ''),
    ...mod.frontmatter,
    component: mod.default,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
