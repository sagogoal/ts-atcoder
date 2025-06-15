import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white px-6 py-4 shadow">
            <nav className="flex gap-6">
                <Link href="/">ホーム</Link>
                <Link href="/todos">Todo一覧</Link>
            </nav>
        </header>
    )
}