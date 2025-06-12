// apps/website-b/src/app/page.tsx
import Link from 'next/link';

export default function HomeB() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0' }}>
      <h1>웹사이트 B - 메인 페이지</h1>
      <p>사용자 프로필 기능을 제공하는 웹사이트입니다.</p>
      <nav>
        <ul>
          <li>
            <Link href="/user">사용자 목록 보기</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
