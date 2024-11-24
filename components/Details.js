export default function Details({ title, poster_path, overview, release_date, vote_average }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-4xl w-full bg-gray-800 text-white rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
        {/* Görsel */}
        {poster_path && (
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white font-semibold text-lg">Film Görseli</p>
            </div>
          </div>
        )}

        {/* İçerik */}
        <div className="p-8">
          <h1 className="text-4xl font-extrabold mb-4 text-center text-blue-400">
            {title || 'Bilinmeyen Film'}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed text-justify mb-6">
            {overview || 'Açıklama bulunamadı.'}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-4">
            <div>
              <strong>Çıkış Tarihi:</strong> {release_date || 'Bilinmiyor'}
            </div>
            <div>
              <strong>Ortalama Puan:</strong> {vote_average || 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
