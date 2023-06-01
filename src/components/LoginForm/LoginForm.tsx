import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled>
      <div className="form-control">
        <label className="loginForm-label" htmlFor="username">
          Username
        </label>
        <input type="text" className="loginForm-input" id="username" />
      </div>
      <div className="form-control">
        <label className="loginform-label" htmlFor="password">
          Password
        </label>
        <input type="password" className="loginForm-input" id="password" />
      </div>
      <button type="submit" className="loginForm-button">
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
