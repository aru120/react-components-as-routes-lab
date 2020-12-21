import React from 'react';
import { movies } from '../data';

const Movies = () => {
  

  function renderMovies(){
     return movies.map(movie => <div>
       <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <p>genre:</p>
        {movie.genres.map(genre => <ul>
          <li>{genre}
          </li>
        </ul>)}
    </div>)
  }

  return (
    <div>
        {renderMovies()}
    </div>
  );
};

export default Movies;
