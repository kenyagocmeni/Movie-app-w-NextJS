import Link from 'next/link';

export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-400">
            🎥 SEMIHFLIX
          </Link>
          <div className="flex gap-4">
            <Link href="/search" className="hover:underline hover:text-blue-400">
              Arama
            </Link>
            <Link href="/favorites" className="hover:underline hover:text-blue-400">
              Favoriler
            </Link>
          </div>
        </nav>
      </header>
    );
  }
  
