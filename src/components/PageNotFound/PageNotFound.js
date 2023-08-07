import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNotFound.css";
function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1 className="page-not-found__numbers">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <NavLink className="page-not-found__link" to="/">
        Назад
      </NavLink>
    </div>
  );
}

export default PageNotFound;
