import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginForm from "../../components/LoginForm/LoginForm";
import paths from "../../routers/paths";

const LoginPage = (): React.ReactElement => {
  const { getTokenData } = useToken();
  const { getUserToken } = useUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userLoginData = await getTokenData(token);
      dispatch(loginUserActionCreator(userLoginData));
      navigate(paths.home);
    }
  };

  return (
    <LoginPageStyled>
      <h1 className="login-title">Log In</h1>
      <LoginForm handleOnSubmit={onSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
