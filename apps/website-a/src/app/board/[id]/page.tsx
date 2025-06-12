// apps/website-a/src/app/board/[id]/page.tsx
import Link from 'next/link';

interface BoardDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BoardDetailPage({ params }: BoardDetailPageProps) {
  const postId = params.id;
  const post = {
    id: postId,
    title: `게시글 ${postId} 제목`,
    content: `이것은 게시글 ${postId}의 상세 내용입니다. 여기에 더 많은 정보가 있습니다.`,
    author: `사용자 ${postId}`,
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0' }}>
      <h1>웹사이트 A - 게시글 상세</h1>
      <h2>{post.title}</h2>
      <p>작성자: {post.author}</p>
      <p>{post.content}</p>
      <p>
        <Link href="/board">목록으로 돌아가기</Link>
      </p>
      <p>
        <Link href="/">홈으로 돌아가기</Link>
      </p>
    </div>
  );
}
