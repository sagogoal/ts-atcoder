// app/layout.tsx
import './globals.css'; // Tailwindのスタイルを読み込み
import Header from '../components/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My ToDo App',
  description: 'Next.jsで作るToDoアプリ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="p-8 max-w-2xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
