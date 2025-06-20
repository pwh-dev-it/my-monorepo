// apps/website-b/src/app/layout.tsx
import './globals.scss';

import React from 'react';

export const metadata = {
  title: '웹사이트 B - 사용자',
  description: '웹사이트 B의 사용자 프로필 기능',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
