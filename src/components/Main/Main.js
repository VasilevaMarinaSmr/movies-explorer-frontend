import React from "react";
import { NavLink } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <div className="header__blok-auth">
          <NavLink to="/signup" className="header__register">
            Регистрация
          </NavLink>
          <NavLink to="/signin">
            <button className="header__button-login">Войти</button>
          </NavLink>
        </div>
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;
