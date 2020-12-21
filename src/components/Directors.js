import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function renderDirectors(){
   return  directors.map(director => <div>
     <h1>{director.name}</h1>
     {director.movies.map(movie => <li>{movie}</li>)}
   </div>)
  }
  return (
    <div>
      {renderDirectors()}
    </div>
  );
}

export default Directors
