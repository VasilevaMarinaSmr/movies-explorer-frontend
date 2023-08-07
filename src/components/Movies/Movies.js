import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ movies, isLoggedIn }) {
    return (
      <main className='movies'>
         <>
      <header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <Navigation />
      </header>
        <SearchForm/>
       <MoviesCardList movies={movies} />
      <Footer /> 
    </>
      </main>
    );
  }
  
  export default Movies;