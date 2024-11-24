export function getFavorites() {
    if (typeof window !== 'undefined') {
      const favorites = localStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
    }
    return [];
  }
  
  export function addFavorite(movie) {
    if (typeof window !== 'undefined') {
      const favorites = getFavorites();
      if (!favorites.some((fav) => fav.id === movie.id)) {
        localStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, movie])
        );
      }
    }
  }
  
  export function removeFavorite(movieId) {
    if (typeof window !== 'undefined') {
      const favorites = getFavorites();
      const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  }

  export function isFavorite(movieId){
    if (typeof window !== 'undefined') {
    const favorites =getFavorites();
    if(favorites.some((fav)=> fav.id===movieId))
    {
     return true   
    }
    else{
        return false
    }
  }
}