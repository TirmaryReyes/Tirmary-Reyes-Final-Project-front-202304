import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../../store/user/types";

interface LoginFormProps {
  handleOnSubmit: (userCredentials: UserCredentials) => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit(userData);
    setUserData(userData);
  };

  const isDisabled = userData.username === "" || userData.password === "";

  return (
    <LoginFormStyled onSubmit={handleOnClick}>
      <div className="login-form-control">
        <label className="login-form-control__label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="login-form-control__input"
          id="username"
          onChange={onChangeInputs}
        />
      </div>
      <div className="login-form-control">
        <label className="login-form__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="login-form-control__input"
          id="password"
          onChange={onChangeInputs}
        />
      </div>
      <div>
        <button disabled={isDisabled} className="login-form__button">
          Log in
        </button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
