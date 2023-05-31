import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .navegation-icon {
    color: ${(props) => props.theme.colors.primary};
    width: 80px;
    height: 32px;
    border-radius: 20px;
    border: 2px solid #215e02;
    padding: 7px;
  }
  .navegation-icon__select:active {
    background-color: #215e02;
  }
`;
export default NavBarStyled;
