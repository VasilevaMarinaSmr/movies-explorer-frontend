import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DURATION_SHORT_MOVIE } from "../../utils/constants.js";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, isLoggedIn, onDeleteMovie }) {
  const { pathname } = useLocation();
  const [foundMovies, setFoundMovies] = useState([]);
  const [queryError, setQueryError] = useState("");
  const [checkboxSelectOn, setCheckboxSelectOn] = useState(false);

  useEffect(() => {
    setFoundMovies(savedMovies);
  }, [pathname, savedMovies]);

  function switchCheckbox() {
    setCheckboxSelectOn(!checkboxSelectOn);
  }

  function handleSearchSubmit(value) {
    if (value) {
      const filteredMovies = savedMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(value.toLowerCase())
      );
      localStorage.setItem("foundSavedMovies", JSON.stringify(filteredMovies));
      if (filteredMovies.length !== 0) {
        setQueryError("");
        setFoundMovies(filteredMovies);
      } else {
        setQueryError("Ничего не найдено");
        setFoundMovies([]);
      }
      selectShortMovie(filteredMovies);

      if (checkboxSelectOn)
        setFoundMovies(
            JSON.parse(localStorage.getItem("foundSavedShortMovies"))
          )
      else
      setFoundMovies(JSON.parse(localStorage.getItem("foundSavedMovies")));
    } else {
      if (checkboxSelectOn)
        setFoundMovies(
            savedMovies.filter((movie) => {
              return movie.duration <= DURATION_SHORT_MOVIE;
            })
          )
        else
        setFoundMovies(savedMovies);
      }
  }

  function selectShortMovie(Movies) {
    if (checkboxSelectOn) {
      const filteredShortMovies = Movies.filter((movie) => {
        return movie.duration <= DURATION_SHORT_MOVIE;
      });
      localStorage.setItem(
        "foundSavedShortMovies",
        JSON.stringify(filteredShortMovies)
      );
      return filteredShortMovies;
    } else {
      return;
    }
  }

  

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <Navigation />
      </header>
      <main className="saved-movies">
        <SearchForm
          switchCheckbox={switchCheckbox}
          handleSearch={handleSearchSubmit}
          checkboxSelectOn={checkboxSelectOn}
        />
        {!queryError && (
          <MoviesCardList
            movies={foundMovies}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
          />
        )}
        {queryError && <p className="movies__search-blank">{queryError}</p>}
        <Footer />
      </main>
    </>
  );
}

export default SavedMovies;
