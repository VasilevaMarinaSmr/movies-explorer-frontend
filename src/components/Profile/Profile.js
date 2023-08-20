import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { SUCCESSFUL_CODE } from "../../utils/constants";
import { EMAIL_REGEXP, NAME_REGEXP } from "../../utils/constants.js";
import { useFormValidation } from "../../utils/useFormValidation";
import HintMessage from "../HintMessage/HintMessage";

import Navigation from "../Navigation/Navigation";
import "./Profile.css";

function Profile({ onSignOut, onUpdate, infoMessage }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues, setIsValid } =
    useFormValidation();
  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  useEffect(() => {
    if (infoMessage.isShown && infoMessage.code === SUCCESSFUL_CODE) {
      setIsInputActive(false);
    }
  }, [infoMessage.isShown, setIsInputActive, infoMessage.code]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdate(values.name, values.email);
  }

  function handleRedactClick() {
    setIsInputActive(true);
  }

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <div className="header__logo" />
        </NavLink>
        <Navigation />
      </header>
      <main className="profile">
        <div className="profile__box">
          <h2 className="profile__title">{`Привет, ${currentUser.name}!!`}</h2>
          <form
            className="profile__form"
            onSubmit={handleSubmit}
            onInput={handleRedactClick}
          >
            <label className="profile__input-box">
              Имя
              <input
                value={values.name || ""}
                onChange={handleChange}
                className="profile__input profile__input_type_name {}"
                name="name"
                type="text"
                placeholder="имя"
                minLength="2"
                maxLength="30"
                required
                title="Разрешено использовать латиницу, кириллицу, пробел или дефис"
                pattern={NAME_REGEXP}
                id="name"
              />
              <span id="name-error" className="profile__input-error">
                {errors.name
                  ? "Поле должно быть заполнено и может содержать только латиницу, кириллицу, пробел или дефис"
                  : ""}
              </span>
            </label>

            <label className="profile__input-box">
              E-mail
              <input
                value={values.email || ""}
                onChange={handleChange}
                className="profile__input profile__input_type_email"
                name="email"
                type="email"
                placeholder="email"
                minLength="2"
                maxLength="30"
                required
                pattern={EMAIL_REGEXP}
                id="email"
              />
              <span id="email-error" className="profile__input-error">
                {errors.email || ""}
              </span>
            </label>

            <HintMessage {...infoMessage} />

            <button
              type="submit"
              className={`profile__btn profile__btn_type_edit ${
                !isInputActive && "profile__btn_hide"
              }`}
              disabled={!isValid}
            >
              Редактировать
            </button>

            <button
              className="profile__btn profile__btn_type_exit"
              onClick={onSignOut}
              type="button"
            >
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
