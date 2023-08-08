import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ movies, isLoggedIn }) {
  return (
    <>
      <header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <Navigation />
      </header>
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} />
        <Footer />
      </main>
    </>
  );
}

export default Movies;
