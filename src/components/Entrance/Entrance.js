import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Entrance.css";

function Entrance(props) {
  return (
    <section className="entrance">
      <NavLink to="/" className="logo">
        <img className="logo__pic" src={logo} alt="Логотип" />
      </NavLink>
      <h2 className="entrance__title">{props.title}</h2>
      <form className="entrance__form">
        <>{props.children}</>
        <label className="entrance__input-box">
          E-mail
          <input
            name="email"
            type="email"
            className="entrance__input-form"
            placeholder="e-mail"
            minLength="2"
            maxLength="30"
            value="pochta@yandex.ru"
            required
          />
          <span id="email-error" className="entrance__error"></span>
        </label>
        <label className="entrance__input-box">
          Пароль
          <input
            name="password"
            type="password"
            className="entrance__input-form"
            minLength="4"
            maxLength="20"
            value=""
            required
          />
          <span id="password-error" className="entrance__error">
            Что-то пошло не так...
          </span>
        </label>
        <button
          className={`entrance__submit-btn ${
            props.linkTo === "signup" && "entrance__login-btn"
          }`}
          type="submit"
        >
          {props.btnName}
        </button>
        <p className="entrance__subtitle">
          {props.subtitle}
          <NavLink to={props.linkTo} className="entrance__link">
            {props.linkName}
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Entrance;
