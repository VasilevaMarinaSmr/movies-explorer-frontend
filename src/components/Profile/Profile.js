import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Profile.css";

function Profile() {
  const user = "Виталий";
  const [name, setName] = React.useState(user);
  const [email, setEmail] = React.useState("pochta@yandex.ru");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <Navigation />
      </header>
      <section className="profile">
        <div className="profile__box">
          <h2 className="profile__title">{`Привет, ${user}!`}</h2>
          <form className="profile__form">
            <label className="profile__input-box">
              Имя
              <input
                value={name || ""}
                onChange={handleChangeName}
                className="profile__input profile__input_type_name"
                name="name"
                type="text"
                placeholder="имя"
                minLength="2"
                maxLength="30"
                required
                id="name"
              />
              <span id="name-error" className="profile__input-error"></span>
            </label>

            <label className="profile__input-box">
              E-mail
              <input
                value={email || ""}
                onChange={handleChangeEmail}
                className="profile__input profile__input_type_email"
                name="email"
                type="email"
                placeholder="email"
                minLength="2"
                maxLength="30"
                required
                id="email"
              />
              <span id="email-error" className="profile__input-error"></span>
            </label>
            <button className="profile__btn profile__btn_type_edit">
              Редактировать
            </button>
            <button className="profile__btn profile__btn_type_exit">
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
