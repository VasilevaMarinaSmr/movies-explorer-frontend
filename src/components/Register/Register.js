import Entrance from "../Entrance/Entrance";
import "./Register.css";

function Register() {
  return (
    <>
      <main className="register">
        <Entrance
          linkTo="signin"
          title="Добро пожаловать!"
          btnName="Зарегистрироваться"
          subtitle="Уже зарегестрированы?"
          linkName="Войти"
        >
          <label className="entrance__input-box">
            Имя
            <input
              type="text"
              className="entrance__input-form"
              placeholder="Имя"
              name="name"
              minLength="2"
              maxLength="30"
              value="Виталий"
              required
            />
            <span id="name-error" className="entrance__error"></span>
          </label>
        </Entrance>
      </main>
    </>
  );
}

export default Register;
