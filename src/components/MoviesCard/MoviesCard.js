import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { convertHoursMinutes } from "../../utils/utils";
import "./MoviesCard.css";

function MoviesCard({ movie, onDeleteMovie, onSaveMovie, savedMovies }) {
  const { pathname } = useLocation();
  const [isSaved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(
      pathname === "/movies"
        ? savedMovies.some((savedMovie) => {
            return savedMovie.movieId === movie.id;
          })
        : true
    );
  }, [savedMovies, pathname === "/movies", "/saved-movies"]);

  function toggleSave() {
    if (isSaved) {
      deleteMovie(movie);
    } else {
      onSaveMovie(movie);
    }
  }

  function deleteMovie(movie) {
    if (pathname === "/movies") onDeleteMovie(movie.id);
    else onDeleteMovie(movie.movieId);
    setSaved(false);
  }

  return (
    <li className="movie">
      <div className="movie__header">
        <div className="movie__info">
          <h2 className="movie__name">{movie.nameRU}</h2>
          <p className="movie__duration">
            {convertHoursMinutes(movie.duration)}
          </p>
        </div>
        {pathname === "/movies" ? (
          <button
            type="button"
            className={`movie__btn-save ${isSaved && "movie__btn-save_active"}`}
            onClick={toggleSave}
          ></button>
        ) : (
          <button
            type="button"
            className="movie__btn-delete"
            onClick={toggleSave}
          ></button>
        )}
      </div>
      <a
        className="movie__link"
        href={movie.trailer || movie.trailerLink}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="movie__img"
          src={`${
            pathname === "/movies"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }`}
          alt={`сцена из фильма ${movie.nameRU}`}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
