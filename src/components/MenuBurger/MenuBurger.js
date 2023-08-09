import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon-menu-full.svg";
import "./MenuBurger.css";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <nav className="nav__burger">
      <button
        className="burger__btn"
        type="button"
        onClick={handleClick}
      ></button>
      <div
        className={`burger__container ${
          isOpen ? "burger__container_open" : ""
        }`}
      >
        <div className={`burger__popup ${isOpen ? "burger__popup_open" : ""}`}>
          <button
            type="button"
            className="burger__btn-close"
            onClick={closePopup}
          ></button>
          <div className="burger__box">
            <NavLink
              exact="true"
              to="/"
              className="burger__link"
              onClick={closePopup}
            >
              Главная
            </NavLink>
            <NavLink
              exact="true"
              to="/movies"
              className="burger__link"
              onClick={closePopup}
            >
              Фильмы
            </NavLink>
            <NavLink
              exact="true"
              to="/saved-movies"
              className="burger__link"
              onClick={closePopup}
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="burger__account">
            <NavLink to="/profile" className="header__account">
              <img src={icon} alt="иконка" className="account__icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuBurger;
