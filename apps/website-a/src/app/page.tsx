// apps/website-a/src/app/page.tsx
import Link from 'next/link';

export default function HomeA() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
      <h1>웹사이트 A - 메인 페이지</h1>
      <p>게시판 기능을 제공하는 웹사이트입니다.</p>
      <nav>
        <ul>
          <li>
            <Link href="/board">게시판 목록 보기</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
