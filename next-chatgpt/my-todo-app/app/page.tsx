// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">ToDo アプリへようこそ</h1>
      <p className="mt-4">
        <Link href="/todos" className="text-blue-500 underline">
          ToDo一覧へ
        </Link>
      </p>
    </main>
  );
}
