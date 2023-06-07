import styled from "styled-components";

const LoginPageStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  padding-top: 69px;

  .login-title {
    font-size: 25px;
  }
`;
export default LoginPageStyled;
