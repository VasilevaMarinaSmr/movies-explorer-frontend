import { useFormValidation } from "../../utils/useFormValidation";
import Entrance from "../Entrance/Entrance";
import "./Register.css";



function Register({ onRegister, infoMessage, ...isFormDisabled }) {
  const { values, errors, isValid, handleChange } = useFormValidation();
  return (
    <>
      <main className="register">
        <Entrance
          type="signup"
          linkTo="signin"
          title="Добро пожаловать!"
          btnName="Зарегистрироваться"
          subtitle="Уже зарегестрированы?"
          linkName="Войти"
          onSubmit={onRegister}
          infoMessage={infoMessage}
          isFormDisabled={isFormDisabled}        >
         
        </Entrance>
      </main>
    </>
  );
}

export default Register;
