# my-monorepo
멀티 웹사이트, 개별 디자인, 공통 API

```
my-monorepo-yarn/
├── apps/                         # 개별 Next.js 웹사이트
│   ├── website-a/                # 웹사이트 A: board, board/[id]
│   │   ├── public/               #   - A 웹사이트 고유의 정적 파일 (이미지, 폰트 등)
│   │   ├── src/
│   │   │   └── app/              #   - Next.js App Router의 라우팅 정의
│   │   │       ├── layout.tsx    #     - A 웹사이트의 최상위 레이아웃
│   │   │       ├── page.tsx      #     - A 웹사이트의 홈페이지 (http://localhost:3000/)
│   │   │       ├── globals.scss  #     - A 웹사이트의 전역 SCSS 스타일
│   │   │       ├── board/        #     - '/board' 경로 (게시판 목록)
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/     #     - '/board/{id}' 동적 경로 (게시글 상세)
│   │   │       │       └── page.tsx
│   │   │       └── components/   #   - A 웹사이트 고유의 재사용 컴포넌트 (디자인 A)
│   │   │           └── Header.tsx
│   │   │           └── BoardList.tsx
│   │   ├── next.config.mjs       #   - A 웹사이트의 Next.js 설정
│   │   ├── package.json          #   - A 웹사이트의 의존성 (공통 패키지 참조)
│   │   └── tsconfig.json         #   - A 웹사이트의 TypeScript 설정
│   │
│   ├── website-b/                # 웹사이트 B: user, user/[id]
│   │   ├── public/
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx      #     - B 웹사이트의 홈페이지 (http://localhost:3001/)
│   │   │       ├── globals.scss  #     - B 웹사이트의 전역 SCSS 스타일
│   │   │       ├── user/         #     - '/user' 경로 (사용자 목록)
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/     #     - '/user/{id}' 동적 경로 (사용자 상세)
│   │   │       │       └── page.tsx
│   │   │       └── components/   #   - B 웹사이트 고유의 재사용 컴포넌트 (디자인 B)
│   │   │           └── Navbar.tsx
│   │   │           └── UserCard.tsx
│   │   ├── next.config.mjs
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── website-c/                # 웹사이트 C: info
│       ├── public/
│       ├── src/
│       │   └── app/
│       │       ├── layout.tsx
│       │       ├── page.tsx      #     - C 웹사이트의 홈페이지 (http://localhost:3002/)
│       │       ├── globals.scss  #     - C 웹사이트의 전역 SCSS 스타일
│       │       └── info/         #     - '/info' 경로 (정보 페이지)
│       │           └── page.tsx
│       │       └── components/   #   - C 웹사이트 고유의 재사용 컴포넌트 (디자인 C)
│       │           └── InfoBox.tsx
│       ├── next.config.mjs
│       ├── package.json
│       └── tsconfig.json
│
├── packages/                     # 공통 코드 및 라이브러리
│   ├── api/                      # 공통 API 클라이언트 패키지
│   │   ├── src/
│   │   │   └── index.ts          #   - 공통 API 호출 함수 및 타입 정의
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── utils/                    # 범용 공통 유틸리티 패키지 (UI와 무관)
│   │   ├── src/
│   │   │   └── date-fns.ts
│   │   │   └── validators.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── mock-api/                 # 로컬 개발용 Mock API 서버 (선택 사항)
│       ├── db.json
│       ├── index.js
│       └── package.json
│
├── package.json                  # 모노레포 루트 package.json (workspaces 정의, 공통 스크립트)
├── tsconfig.json                 # 모노레포 루트 TypeScript 설정 (경로 별칭 및 참조)
├── .gitignore                    # Git 무시 파일
└── .gitlab-ci.yml                # GitLab CI/CD 파이프라인 설정


```

## 새로운 웹 사이트 추가할때 예시 (추가할 웹사이트 폴더명이 website-a라고 가정)
### 1. 웹사이트 디렉토리 생성
```
cd apps
yarn create next-app website-a --ts --use-yarn --app
# SCSS 설치
cd website-a
yarn add sass
```
### 2. apps/website-a/package.json 수정 (공통 패키지 의존성 추가)
```json5
// apps/website-a/package.json
{
  "name": "website-a",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.x.x",
    "sass": "^1.x.x",
    "@monorepo/api": "*",    // 공통 API 패키지 참조
    "@monorepo/utils": "*"   // 공통 Utils 패키지 참조
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.x.x",
    "typescript": "^5"
  }
}
```

### 3.apps/website-a/next.config.ts 수정 (transpilePackages 추가)
```typescript
// apps/website-a/next.config.ts
import type { NextConfig } from 'next'; // NextConfig 타입 임포트

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = { // nextConfig 변수에 타입 명시
    output: 'standalone',
    // 모노레포의 공통 패키지를 트랜스파일링하도록 설정
    // Next.js가 node_modules 외부에 있는 코드를 처리할 수 있도록 합니다.
    transpilePackages: ['@monorepo/api', '@monorepo/utils'],
};

export default nextConfig;
```

### 4.apps/website-a/tsconfig.json 수정 (extends 및 include 추가)
```json5
// apps/website-a/tsconfig.json
{
  "extends": "../../tsconfig.json", // 루트 tsconfig.json 상속
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"] // apps/website-a/src 아래에서 절대 경로 사용
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "../../packages/api/src/**/*.ts", "../../packages/utils/src/**/*.ts"],
  "exclude": ["node_modules"]
}
```
### 5. apps/website-a/src/app/layout.tsx (기본 레이아웃)
```typescript jsx
// apps/website-a/src/app/layout.tsx
import './globals.scss'; // 전역 SCSS 임포트

export const metadata = {
  title: '웹사이트 A - 게시판',
  description: '웹사이트 A의 게시판 기능',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

### 6. apps/website-a/src/app/globals.scss 
#### (자동 생성되는 globals.css 는 삭제)
#### (자동 생성되는 page.module.css 도 삭제 후 필요 시 scss 파일로 생성)
```scss
/* apps/website-a/src/app/globals.scss */
body {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f4f8; /* 웹사이트 A 고유 배경색 */
  color: #333;
}

h1, h2, h3 {
  color: #2c3e50;
}

a {
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
```
### 7. apps/website-a/src/app/page.tsx (홈페이지)
```typescript jsx
// apps/website-a/src/app/page.tsx
import Link from 'next/link';

export default function HomeA() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
      <h1>웹사이트 A - 메인 페이지</h1>
      <p>게시판 기능을 제공하는 웹사이트입니다.</p>
      <nav>
        <ul>
          <li><Link href="/board">게시판 목록 보기</Link></li>
        </ul>
      </nav>
    </div>
  );
}
```

### 8. apps/website-a/src/components/Header.tsx (예시 고유 컴포넌트)
```typescript jsx
// apps/website-a/src/components/Header.tsx
import React from 'react';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Website A Header</h1>
    </header>
  );
}
```
```scss
/* apps/website-a/src/components/Header.module.scss */
.header {
  background-color: #34495e;
  color: white;
  padding: 15px 20px;
  text-align: center;
  font-size: 24px;
}
```

### 9. my-monorepo-yarn/package.json 수정 (새 웹사이트 추가, 포트 겹치치 않도록)
```
"dev:a": "yarn workspace website-a dev -- -p 3001",
```