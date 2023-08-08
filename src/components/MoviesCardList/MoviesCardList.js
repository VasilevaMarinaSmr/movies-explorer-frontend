import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import "./MoviesCardList.css";

function MoviesCardList({ movies, MoreMovies }) {

  const [isMoreMovies, setMoreMovies] = useState(MoreMovies);

  return (
    <section className='movies-list'>
      <ul className='movies-list__container'>
        {movies.map((movie, idx) => {
          return <MoviesCard key={idx} movie={movie} id={movie._id} />;
        })}
      </ul>
      <div className='movies-list__btn-conteiner'>
        <button type='button' className={`movies-list__btn-show-more 
        ${ isMoreMovies && "movies-list__btn-show-more_hide" }`}>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;