import React, { useEffect, useState } from "react";
import { useFormValidation } from "../../utils/useFormValidation";
import "./SearchForm.css";

function SearchForm({ query, handleSearch, switchCheckbox, checkboxSelectOn }) {
  const { values, setValues, handleChange } = useFormValidation();

  const [isInputSeachBlank, setInputSeachBlank] = useState(false);

  useEffect(() => {
    setValues({ query: query });
  }, [query, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(values.query);
    if (values.query === "") {
      setInputSeachBlank(true);
    } else {
      setInputSeachBlank(false);
    }
  }

  useEffect(() => {
    handleSearch(values.query);
  }, [checkboxSelectOn]);

  return (
    <section className="search">
      <form className="search__movie" onSubmit={handleSubmit} noValidate>
        <input
          name="query"
          type="text"
          placeholder="Фильм"
          className="search__item"
          value={values.query || ""}
          onChange={handleChange}
          required
        />
        <span id="email-error" className="search-form__error">
          {isInputSeachBlank ? "Нужно ввести ключевое слово" : ""}
        </span>
        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
      <div className="search__tumb">
        <input
          type="checkbox"
          id="toggle-button"
          className="search__tumb-btn"
          checked={checkboxSelectOn}
          onChange={switchCheckbox}
        />

        <p className="search__film-length">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
