import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie }) {
  const { pathname } = useLocation();
  const [isSaved, setSaved] = useState(false);

  function getTime(min) {
    if (min > 60) {
      return `${Math.floor(min / 60)}ч ${min % 60}м`;
    } else if (min === 60) {
      return "1ч";
    } else {
      return `${min}мин`;
    }
  }

  function handleClick() {
    if (isSaved) {
       setSaved(false);
    } else {
       setSaved(true);
    }
  }

  return (
    <li className='movie'>
      <div className='movie__header'>
        <div className='movie__info'>
          <h2 className='movie__name'>{movie.nameRu}</h2>
          <p className='movie__duration'>{getTime(movie.duration)}</p>
        </div>
        {pathname === "/movies" ? (
          <button
            type='button'
            className={`movie__btn-save ${
              isSaved && "movie__btn-save_active"
            }`} onClick={handleClick}>            
            </button>
        ) : (
          <button
            type='button'
            className='movie__btn-delete'></button>
        )}
      </div>
      <img className='movie__img' src={movie.image} alt='сцена из фильма' />
    </li>
  );
}

export default MoviesCard;