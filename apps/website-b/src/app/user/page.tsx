'use client';
// apps/website-b/src/app/user/page.tsx
import { useUser } from '@monorepo/api';
import Link from 'next/link';

export default function UserListPage() {
  const { data: users = [], error } = useUser({ props: { id: '1' } });

  return (
    <div style={{ padding: '20px', backgroundColor: '#fbe9e7' }}>
      <h1>웹사이트 B - 사용자 목록</h1>
      {error && <p style={{ color: 'red' }}>데이터 로드 오류: {error.message}</p>}
      <ul>
        {users?.map((user) => (
          <li
            key={user.id}
            style={{
              marginBottom: '10px',
              border: '1px solid #ddd',
              padding: '10px',
            }}
          >
            <Link href={`/user/${user.id}`}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
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
