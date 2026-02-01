export interface Post {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	readTime: number;
	tags: string[];
	category: string;
}

export const posts: Post[] = [
	{
		id: 1,
		title: "React 18의 새로운 기능들 완벽 정리",
		excerpt:
			"React 18에서 도입된 Concurrent Features, Automatic Batching, Transitions 등 주요 기능들을 상세히 알아봅니다.",
		content: `# React 18의 새로운 기능들 완벽 정리

React 18은 여러 가지 혁신적인 기능들을 도입했습니다. 가장 중요한 변화는 **Concurrent Rendering**입니다.

## Concurrent Features

Concurrent Rendering는 React가 여러 버전의 UI를 동시에 준비할 수 있게 해주는 기능입니다.

\`\`\`jsx
import { startTransition } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    
    startTransition(() => {
      setList(largeList.filter(item => 
        item.includes(e.target.value)
      ));
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <List items={list} />
    </div>
  );
}
\`\`\`

## Automatic Batching

이제 모든 상태 업데이트가 자동으로 배칭됩니다:

\`\`\`jsx
// React 18에서는 이 두 업데이트가 자동으로 배칭됩니다
setCount(c => c + 1);
setFlag(f => !f);
\`\`\`

이러한 기능들을 통해 더 나은 사용자 경험을 제공할 수 있습니다.`,
		date: "2024-01-15",
		readTime: 8,
		tags: ["React", "JavaScript", "Frontend"],
		category: "Frontend",
	},
	{
		id: 2,
		title: "TypeScript 고급 타입 시스템 마스터하기",
		excerpt:
			"Utility Types, Conditional Types, Template Literal Types 등 TypeScript의 고급 타입 시스템을 심도 있게 다룹니다.",
		content: `# TypeScript 고급 타입 시스템 마스터하기

TypeScript는 단순한 타입 검사기를 넘어 강력한 타입 시스템을 제공합니다.

## Utility Types

\`\`\`typescript
// Pick - 특정 속성만 선택
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Pick<User, 'id' | 'name'>;

// Omit - 특정 속성 제외
type UserWithoutId = Omit<User, 'id'>;

// Partial - 모든 속성을 옵셔널로
type PartialUser = Partial<User>;
\`\`\`

## Conditional Types

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
\`\`\`

이러한 고급 타입들을 활용하면 더 안전하고 유연한 코드를 작성할 수 있습니다.`,
		date: "2024-01-10",
		readTime: 12,
		tags: ["TypeScript", "타입시스템", "Programming"],
		category: "Language",
	},
	{
		id: 3,
		title: "Modern CSS 레이아웃 완벽 가이드",
		excerpt:
			"Flexbox, Grid, Container Queries 등 현대적인 CSS 레이아웃 기법들을 실용적인 예제와 함께 학습합니다.",
		content: `# Modern CSS 레이아웃 완벽 가이드

CSS 레이아웃은 복잡한 UI를 만드는 핵심입니다.

## CSS Grid

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
\`\`\`

## Flexbox

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
\`\`\`

## Container Queries

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

이러한 현대적인 레이아웃 기법들을 활용해 반응형 디자인을 쉽게 구현할 수 있습니다.`,
		date: "2024-01-05",
		readTime: 10,
		tags: ["CSS", "Layout", "Responsive"],
		category: "Frontend",
	},
];
