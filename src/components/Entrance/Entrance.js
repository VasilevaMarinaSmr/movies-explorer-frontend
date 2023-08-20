import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { EMAIL_REGEXP } from "../../utils/constants.js";
import { useFormValidation } from "../../utils/useFormValidation";
import HintMessage from "../HintMessage/HintMessage";

import "./Entrance.css";

function Entrance({
  type,
  linkTo,
  title,
  btnName,
  subtitle,
  linkName,
  onSubmit,
  infoMessage,
  isFormDisabled,  
}) {

  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (type === "signin")
      onSubmit(values.email, values.password)
    else
      onSubmit(values.name, values.email, values.password)
  }

  return (
    <section className="entrance">
      <NavLink to="/" className="logo">
        <img className="logo__pic" src={logo} alt="Логотип" />
      </NavLink>
      <h2 className="entrance__title">{title}</h2>
      <form className="entrance__form"
      noValidate
      onSubmit={handleSubmit}
      disabled={isFormDisabled}
      >
         {type === 'signup' && (
           <label className="entrance__input-box">
           Имя
           <input
             type="text"
             className="entrance__input-form"
             placeholder="Имя"
             name="name"
             minLength="2"
             maxLength="30"
             required             
             value={values.name || ""}
             onChange={handleChange}             
           />
           <span id="name-error" className="entrance__error">
           {errors.name
               ? `Поле Имя должно быть заполнено и может содержать только латиницу,
               кириллицу, пробел, дифис.`
               : ""}
           </span>
         </label>

         )}
        <label className="entrance__input-box">
          E-mail
          <input
            name="email"
            type="text"
            className="entrance__input-form"
            placeholder="email"
            minLength="2"
            maxLength="30"
            value={values.email || ""}
            required
            onChange={handleChange}
            pattern = {EMAIL_REGEXP}
          />
          <span id="email-error" className="entrance__error">
          {errors.email ? 
          `Поле Email должно содержать латинские буквы в нижнем регистре,
          символы, знак @, доменное имя почтового сервера, точка и доменное имя.` : ""}
          </span>
        </label>
        <label className="entrance__input-box">
          Пароль
          <input
            id="password"
            name="password"
            type="password"
            className="entrance__input-form"
            minLength="6"
            maxLength="40"
            required
            value={values.password || ""}
            onChange={handleChange}            
          />
          <span id="password-error" className="entrance__error">
          {errors.password ? 
          `Пароль должен соcтоять не менее чем из 6 знаков, включая строчные и
          прописные латинские буквы, цифры и символы.` : ""}
          </span>
        </label>
        <HintMessage {...infoMessage} />
        <button
          className={`entrance__submit-btn
          ${linkTo === "signup" && "entrance__login-btn"  }  
          ${!isValid && 'entrance__submit-btn_disabled'}`}
          type="submit"
          disabled={!isValid}          
        >

          {btnName}
        </button>
        <p className="entrance__subtitle">
          {subtitle}
          <NavLink to={`/${linkTo}`} className="entrance__link">
            {linkName}
          </NavLink>
        </p>
      </form>
    </section>
  );
}

export default Entrance;
