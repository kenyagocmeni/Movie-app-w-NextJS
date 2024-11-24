'use client';

import { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../../../utils/localStorage';
import MovieCard from '../../../components/MovieCard';
import defimage from '../../../assets/indir.jpg';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);
  
  const isMovieFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId); // Favori kontrolü
  };

  const handleRemoveFavorite = (movieId) => {
    removeFavorite(movieId);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Favorilerim</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Henüz favori eklenmedi!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title || 'Bilinmeyen Film'}
              description={movie.overview || 'Açıklama bulunamadı.'}
              photo={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              isFavorite={true}
              onRemove={() => handleRemoveFavorite(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
