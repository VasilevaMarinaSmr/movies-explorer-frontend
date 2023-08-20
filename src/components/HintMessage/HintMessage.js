import React, { useEffect, useState } from "react";
import { INVALID_CODE, SUCCESSFUL_CODE } from "../../utils/constants";
import "./HintMessage.css";

function HintMessage({ isShow, message, code, type }) {
  const [contentMessage, setСontentMessage] = useState("");

  useEffect(() => {
    switch (code) {
      case INVALID_CODE:
        setСontentMessage(getMessage(type));
        break;
      case SUCCESSFUL_CODE:
        setСontentMessage("Учетные данные обновлены");
        break;
      default:
        setСontentMessage(message);
    }

    function getMessage(type) {
      if (type === "profile") {
        return "При обновлении даннных профиля произошла ошибка";
      }

      if (type === "register") {
        return "При регистрации пользователя произошла ошибка";
      }

      if (type === "login") {
        return "Не верный логин или пароль";
      }
    }
  }, [message, code, type]);

  return (
    <div className="message">
      {isShow && (
        <p
          className={`message__text ${
            code === SUCCESSFUL_CODE && "message__text_type_success"
          }`}
        >
          {contentMessage}
        </p>
      )}
    </div>
  );
}

export default HintMessage;
