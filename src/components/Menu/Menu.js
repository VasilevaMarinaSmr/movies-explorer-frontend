import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../images/icon-menu-full.svg";
import "./Menu.css";

function Menu() {
  return (
    <>
      <div className="header__wrap">
        <div className="header__menu">
          <NavLink to="/movies" className="header__films">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__save-films">
            Сохраненные фильмы
          </NavLink>
        </div>
        <NavLink to="/profile" className="header__account">
          <img src={icon} alt="иконка" className="header__account-icon" />
        </NavLink>
      </div>
    </>
  );
}
export default Menu;
