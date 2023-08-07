import React, { useState } from "react";
import "./SearchForm.css";
function SearchForm() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  return (
    <section className="search">
      <div className="search__movie">
        <input
          required
          id="film"
          name="film"
          type="text"
          placeholder="Фильм"
          className="search__item"
        ></input>
        <button className="search__button">Найти</button>
      </div>
      <div className="search__tumb">
        <label
          className={`search__tumb-btn ${isActive ? "search__tumb-btn_on" : ""}`}
          onClick={handleClick}
        ></label>
        <p className="search__film-length">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;