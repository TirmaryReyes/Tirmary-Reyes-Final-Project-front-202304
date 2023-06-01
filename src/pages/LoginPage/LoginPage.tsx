import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="login-title">Log In</h1>
      <LoginForm handleOnSubmit={() => ({})} />
    </LoginPageStyled>
  );
};

export default LoginPage;
