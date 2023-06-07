import styled from "styled-components";

const LoginFormStyled = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.primary};

  .login-form-control__input {
    margin-top: 10px;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    width: 267px;
  }

  .login-form__button {
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px;
    border-radius: 15px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: white;
    width: 145px;
    font-weight: bold;

    :disabled {
      background-color: ${(props) => props.theme.colors.secondaryLigth};
      border: 2px solid ${(props) => props.theme.colors.secondaryLigth};
    }
  }
`;
export default LoginFormStyled;
