export interface Post {
  id: number;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: '첫 번째 게시물',
    content: '이것은 첫 번째 게시물입니다.',
  },
  {
    id: 2,
    title: '두 번째 게시물',
    content: '이것은 두 번째 게시물입니다.',
  },
  {
    id: 3,
    title: '세 번째 게시물',
    content: '이것은 세 번째 게시물입니다.',
  },
];
