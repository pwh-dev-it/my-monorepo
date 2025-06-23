// apps/website-a/src/app/layout.tsx
import './globals.scss';

import { createQueryClient } from '@monorepo/api';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

import { Header } from '../components/Header';

export const metadata = {
  title: '웹사이트 A - 게시판',
  description: '웹사이트 A의 게시판 기능',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // queryClient 중복 생성 을 방지하기 위해 useState 사용
  const [queryClient] = useState(() => createQueryClient());

  return (
    <html lang="ko">
      <body>
        <QueryClientProvider client={queryClient}>
          <>
            <Header />
            {children}
          </>
        </QueryClientProvider>
      </body>
    </html>
  );
}
