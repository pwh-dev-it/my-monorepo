// apps/website-a/src/app/board/page.tsx
import { fetchUsers } from '@monorepo/api'; // 공통 API 사용 예시
import Link from 'next/link';
import { capitalizeFirstLetter } from '@monorepo/utils'; // 공통 유틸리티 사용 예시

export default async function BoardListPage() {
  const { data: users, error } = await fetchUsers();
  const mockPosts =
    users?.map((user) => ({
      id: user.id,
      title: `${capitalizeFirstLetter(user.name)}의 게시글`, // 공통 유틸리티 적용
      content: `안녕하세요, ${user.name}입니다. 게시글 내용 요약...`,
    })) || [];

  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9' }}>
      <h1>웹사이트 A - 게시판 목록</h1>
      {error && <p style={{ color: 'red' }}>데이터 로드 오류: {error}</p>}
      <ul>
        {mockPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <Link href={`/board/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 50)}...</p>
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </div>
  );
}
