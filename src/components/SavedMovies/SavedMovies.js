import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({ movies, isLoggedIn }) {
  return (
    <>
      <header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <Navigation />
      </header>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList movies={movies} MoreMovies={true}/>

        <Footer />
      </main>
    </>
  );
}

export default SavedMovies;
