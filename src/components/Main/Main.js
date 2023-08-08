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
    <>
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
