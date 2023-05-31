import LoginForm from "../LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="login-title">Log In</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
