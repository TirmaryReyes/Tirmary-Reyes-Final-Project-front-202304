import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  handleOnSubmit: () => void;
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
    handleOnSubmit();
    setUserData(userData);
  };

  const isDisabled = !userData.username || !userData.password;

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
      <div className="form-control">
        <label className="login-form__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="login-Form-control__input"
          id="password"
          onChange={onChangeInputs}
        />
      </div>
      <div>
        <button
          type="submit"
          className="login-form__button"
          disabled={isDisabled}
          onClick={handleOnSubmit}
        >
          Log in
        </button>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
