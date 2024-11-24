'use client'
import React from 'react'
import '../../../../styles/globals.css'
import Details from '../../../../components/Details';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';


export default function Page() {
  const params = useParams();
  const id = parseInt(params.id)
  const movies = useSelector(state=>state.movies.movies)
  const movie = movies.find((movie) => movie.id === id);  
  console.log('Redux Movies:', movies); // Tüm filmleri göster
  console.log('Parametre ID:', id); // `id` değerini göster
  console.log('Bulunan Film:', movie); // `find` sonucu göster
  if (!movie) {
    return <div>Film bulunamadı.</div>;
  }


  return (
      <div >        
          <Details key={movie.id} title={movie.original_title}  poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} vote_average={movie.vote_average} />
      </div>
    );
  }
  
  