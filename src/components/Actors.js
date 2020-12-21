import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  function renderActors(){
    return actors.map(actor =><div>
      <h1>{actor.name}</h1>
      {actor.movies.map(movie => <li>{movie}</li>)}
    </div>)
  }
  return (
    <div>
      {renderActors()}
    </div>
  );
};

export default Actors;
