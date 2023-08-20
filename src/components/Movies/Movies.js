import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import moviesApi from "../../utils/MoviesApi.js";
import {
  DURATION_SHORT_MOVIE,
  MOVIES_TO_ADD_1280,
  MOVIES_TO_ADD_768,
  MOVIES_TO_RENDER_1280,
  MOVIES_TO_RENDER_320,
  MOVIES_TO_RENDER_768,
} from "../../utils/constants.js";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ isLoggedIn, onSaveMovie, onDeleteMovie, savedMovies }) {
  const { pathname } = useLocation();
  const [foundMovies, setFoundMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [queryError, setQueryError] = useState("");
  const [checkboxSelectOn, setCheckboxSelectOn] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [renderedMovies, setRenderedMovies] = useState(foundMovies);
  const [isShowMoreButtonActive, setShowMoreButtonActive] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (renderedMovies.length >= foundMovies.length) {
      setShowMoreButtonActive(true);
    } else {
      setShowMoreButtonActive(false);
    }
  });

  useEffect(() => {
    countRenderedMovies(foundMovies);
  }, [currentWidth, foundMovies]);

  useEffect(() => {
    if (localStorage.getItem("query")) {
      setQuery(localStorage.getItem("query"));
    }
    if (localStorage.getItem("checkboxSelectOn") === "true") {
      setCheckboxSelectOn(true);
      setFoundMovies(JSON.parse(localStorage.getItem("foundShortMovies")));
    }
    if (localStorage.getItem("checkboxSelectOn") === "false") {
      setCheckboxSelectOn(false);
      setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }, [pathname === "/movies"]);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  function getMovies() {
    setLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch((err) => {
        setQueryError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleSearch(data) {
    const listMovies = JSON.parse(localStorage.getItem("movies"));

    if (!listMovies) {
      getMovies();
    }
    if (data) {
      setQuery(data);
      localStorage.setItem("query", data);
      const filteredMovies = listMovies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(data.toLowerCase())
      );
      localStorage.setItem("foundMovies", JSON.stringify(filteredMovies));
      if (filteredMovies.length !== 0) {
        setQueryError("");
        setFoundMovies(filteredMovies);
      } else {
        setQueryError("Фильмы не найдены");
        setFoundMovies([]);
      }
      checkIfShortMovie(filteredMovies);

      checkboxSelectOn
        ? setFoundMovies(JSON.parse(localStorage.getItem("foundShortMovies")))
        : setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")));
    }
  }

  function checkIfShortMovie(filteredMovies) {
    if (checkboxSelectOn) {
      localStorage.setItem("checkboxSelectOn", "true");
      const filteredShortMovies = filteredMovies.filter((movie) => {
        return movie.duration <= DURATION_SHORT_MOVIE;
      });
      localStorage.setItem(
        "foundShortMovies",
        JSON.stringify(filteredShortMovies)
      );
      return filteredShortMovies;
    } else {
      localStorage.setItem("checkboxSelectOn", "false");
      return;
    }
  }

  function switchCheckbox() {
    setCheckboxSelectOn(!checkboxSelectOn);
  }

  const updateMedia = () => {
    setTimeout(() => {
      setCurrentWidth(window.innerWidth);
    }, 5000);
  };

  function countRenderedMovies(foundMovies) {
    if (currentWidth > 1076) {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_1280));
    } else if (currentWidth > 611 && currentWidth <= 1076) {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_768));
    } else {
      setRenderedMovies(foundMovies.slice(0, MOVIES_TO_RENDER_320));
    }
  }

  function onShowMoreClickButton() {
    if (renderedMovies.length < foundMovies.length && currentWidth > 1076) {
      setRenderedMovies(
        foundMovies.slice(0, renderedMovies.length + MOVIES_TO_ADD_1280)
      );
    } else if (
      renderedMovies.length < foundMovies.length &&
      currentWidth <= 1076
    ) {
      setRenderedMovies(
        foundMovies.slice(0, renderedMovies.length + MOVIES_TO_ADD_768)
      );
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
      <main className="movies">
        <SearchForm
          query={query}
          handleSearch={handleSearch}
          switchCheckbox={switchCheckbox}
          checkboxSelectOn={checkboxSelectOn}
        />
        {isLoading && <Preloader />}
        {!queryError && (
          <MoviesCardList
            movies={renderedMovies}
            onDeleteMovie={onDeleteMovie}
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
            isShowMoreButtonActive={isShowMoreButtonActive}
            onShowMoreClickButton={onShowMoreClickButton}
          />
        )}
        {queryError && <p className="movies__search-blank">{queryError}</p>}
        <Footer />
      </main>
    </>
  );
}

export default Movies;
