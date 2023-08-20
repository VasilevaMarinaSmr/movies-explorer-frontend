import React from "react";
import { NavLink } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Portfolio from "../Portfolio/Portfolio";
import Preloader from "../Preloader/Preloader";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main({ isLoading, isLoggedIn }) {
  return isLoading ? (
    <Preloader />
  ) : (
    <>      
      {isLoggedIn ? (
        <header className="header">
          <NavLink to="/">
            <div className="header__logo" />
          </NavLink>
          <Navigation />
        </header>
      ) : (
        <Header className="header">
          <NavLink to="/">
            <div className="header__logo" />
          </NavLink>
          <div className="header__blok-auth">
            <NavLink to="/signup" className="header__register">
              Регистрация
            </NavLink>
            <NavLink to="/signin">
              <button className="header__button-login" type="button">
                Войти
              </button>
            </NavLink>
          </div>
        </Header>
      )}
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
