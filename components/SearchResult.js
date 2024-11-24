'use client';

import { useState, useEffect } from 'react';
import { getFavorites, addFavorite, removeFavorite } from "../utils/localStorage";
import MovieCard from "./MovieCard";
import defimage from '../assets/indir.jpg';
import { useDispatch } from 'react-redux';
import { setMovies, setQuery } from '../redux/movieSlice/movieSlice';

export default function SearchResultsClient({ movies }) {
  const [favorites, setFavorites] = useState([]);
  const dispatch=useDispatch();


  useEffect(() => {
    const storedFavorites = getFavorites(); // Favoriler listesi
    setFavorites(storedFavorites);
  }, []);

  const handleAddFavorite = (movie) => {
    addFavorite(movie); // Favorilere ekle
    setFavorites([...favorites, movie]); // State'i güncelle
  };

  const handleRemoveFavorite = (movieId) => {
    removeFavorite(movieId); // Favorilerden çıkar
    setFavorites(favorites.filter((fav) => fav.id !== movieId)); // State'i güncelle
  };

  const isMovieFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId); // Favori kontrolü
  };
  
  dispatch(setMovies(movies))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title || movie.original_title || 'Bilinmeyen Film'}
          description={movie.overview || 'Açıklama bulunamadı.'}
          movie={movie}
          photo={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defimage
          }
          isFavorite={isMovieFavorite(movie.id)} // Favori durumu
          onAddFavorite={() => handleAddFavorite(movie)} // Favorilere ekle
          onRemove={() => handleRemoveFavorite(movie.id)} // Favorilerden çıkar
        />
      ))}
    </div>
  );
}
