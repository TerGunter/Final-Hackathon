import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../contexts/AuthContextProvider";

const Register = () => {
  const { registerUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Регистрация"}
        btnText={"Зарегистрировать"}
        link={"/login"}
        linkText={"Уже есть аккаунт? Авторизируйтесь!"}
        handleSave={registerUser}
      />
    </div>
  );
};

export default Register;
