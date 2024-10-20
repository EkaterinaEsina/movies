import React, { useEffect, useState } from "react";

import { Movie } from "../../components/Movie";
import { Preloader } from "../../components/Preloader";
import { Search } from "../../components/Search";

const apiKey = process.env.REACT_APP_API_KEY_MOVIES;

export const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleSearch('Matrix');
  }, []);

  const handleSearch = (searchingMovie, type = 'all') => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchingMovie}&type=${type.replace('all', '')}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }

  return (
    <>
      <Search handleSearch={handleSearch} />

      {loading 
        ? <Preloader />
        : movies.length
          ? <div className="movies">
            {movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
          </div>
          : <>Nothing founded</>
      }
    </>
  )
}