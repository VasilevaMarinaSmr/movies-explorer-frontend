import Entrance from "../Entrance/Entrance";
import "./Login.css";

function Login() {
  return (
    <>
      <main className="login">
        <Entrance
          linkTo="signup"
          title="Рады видеть!"
          btnName="Войти"
          subtitle="Ещё не зарегистрированы?"
          linkName="Регистрация"
        />
      </main>
    </>
  );
}

export default Login;
