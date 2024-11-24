'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/search/${query}`);
      }
    };
  
    return (
        <form onSubmit={handleSearch} className="flex gap-4 items-center bg-gray-800 p-4 rounded-lg shadow-md max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Film ara..."
          className="flex-1 p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-2 mb-2 rounded transition-all"
        >
          Ara
        </button>
      </form>
    );
  }
  