import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useAuth } from "../contexts/AuthContextProvider";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Авторизируйтесь или зарегистрируйтесь, чтобы делать покупки"}
        btnText={"Логин"}
        link={"/register"}
        linkText={"Ещё нет аккаунта? Зарегистрируйтесь! "}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
