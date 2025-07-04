// apps/website-a/src/app/layout.tsx
import './globals.scss';

import React from 'react';

import { ClientProvider } from '../components/ClientProvider';
import { Header } from '../components/Header';

export const metadata = {
  title: '웹사이트 A - 게시판',
  description: '웹사이트 A의 게시판 기능',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ClientProvider>
          <Header />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
