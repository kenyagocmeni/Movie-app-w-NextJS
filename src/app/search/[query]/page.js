import SearchResultsClient from "../../../../components/SearchResult";
import {useSelector , useDispatch} from 'react-redux'
import { setQuery } from "../../../../redux/movieSlice/movieSlice";



export default async function SearchResults({ params }) {
  const { query } = params;

  // TMDB API'den veri çekiyoruz
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=9f254b6c5e91f6cc7e5288b5a7b21638`
  );
  const data = await res.json();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">"{query}" için Arama Sonuçları</h1>
      <SearchResultsClient movies={data.results || []} />
    </div>
  );
}
