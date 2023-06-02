import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();

  const onSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    return token;
  };

  return (
    <LoginPageStyled>
      <h1 className="login-title">Log In</h1>
      <LoginForm handleOnSubmit={onSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
