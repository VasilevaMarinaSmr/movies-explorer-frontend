import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  onDeleteMovie,
  onSaveMovie,
  savedMovies,
  isShowMoreButtonActive,
  onShowMoreClickButton
}) {
  const { pathname } = useLocation();
  
  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {movies.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              onDeleteMovie={onDeleteMovie}
              onSaveMovie={onSaveMovie}
              savedMovies={savedMovies}
              key={pathname === "/movies" ? movie.id : movie.movieId}
              id={pathname === "/movies" ? movie.id : movie.movieId}              
            />
          );
        })}
      </ul>

      <div className="movies-list__btn-conteiner">
        <button
          type="button"
          className={`movies-list__btn-show-more
        ${
          !isShowMoreButtonActive && pathname === "/movies"
            ? ""
            : "movies-list__btn-show-more_hide"
        }`}
          onClick={onShowMoreClickButton}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
