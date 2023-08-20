import Entrance from "../Entrance/Entrance";
import "./Login.css";

function Login({ onLogin, infoMessage, ...isFormDisabled }) {
  return (
    <>
      <main className="login">
        <Entrance
          type="signin"
          linkTo="signup"
          title="Рады видеть!"
          btnName="Войти"
          subtitle="Ещё не зарегистрированы?"
          linkName="Регистрация"
          onSubmit={onLogin}
      infoMessage={infoMessage}
      isFormDisabled={isFormDisabled}
        />
      </main>
    </>
  );
}

export default Login;
