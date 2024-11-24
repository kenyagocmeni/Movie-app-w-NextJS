import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';



export default function MovieCard({ id, title, description, photo, isFavorite, onAddFavorite, onRemove }) {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      {/* Görsel */}
      <Image
        src={photo || '/default-image.png'}
        alt={title || 'Film görseli'}
        width={500}
        height={500}
        className="w-full h-48 object-cover"
      />

      {/* İçerik */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2">{title || 'Bilinmeyen Film'}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {description?.length > 100 ? description.slice(0, 100) + '...' : description}
          </p>
        </div>

        {/* Butonlar */}
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={`/detailPages/${id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            İncele
          </Link>
          {isFavorite ? (
            <button
              onClick={onRemove}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
            >
              Favorilerden Çıkar
            </button>
          ) : (
            <button
              onClick={onAddFavorite}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
            >
              Favorilere Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

