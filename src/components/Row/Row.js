import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../api/axios.js';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {

  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  console.log(movies);

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="rowPosters">
        {
          movies.map((movie) => (
            (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)
          ) && (
            <img className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} key={movie.id} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name} />
          ))
        }
      </div>
    </div>
  )
}

export default Row