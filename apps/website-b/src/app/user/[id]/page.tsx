// apps/website-b/src/app/user/[id]/page.tsx
import Link from 'next/link';

interface UserDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id: userId } = await params;
  const user = {
    id: userId,
    name: `사용자 ${userId} 프로필`,
    email: `user${userId}@example.com`,
    bio: `안녕하세요, 저는 사용자 ${userId}입니다. 이 공간에 제 소개를 할 수 있습니다.`,
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f2f7' }}>
      <h1>웹사이트 B - 사용자 프로필</h1>
      <h2>{user.name}</h2>
      <p>이메일: {user.email}</p>
      <p>소개: {user.bio}</p>
      <p>
        <Link href="/user">목록으로 돌아가기</Link>
      </p>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </div>
  );
}
