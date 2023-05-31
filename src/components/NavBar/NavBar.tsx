import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <NavLink to="/">
        <img
          className="navegation-icon navegation-icon__select"
          src="/images/home.svg"
          alt="home page"
          width="28"
          height="28"
        />
      </NavLink>
      <NavLink to="/add" aria-label="add" title="add">
        <img
          className="navegation-icon navegation-icon__select"
          src="/images/add.svg"
          alt="add page"
          width="28"
          height="28"
        />
      </NavLink>

      <button className="button__logout">
        <img
          className="navegation-icon"
          src="/images/logout.svg"
          alt="logout"
          width="28"
          height="28"
        />
      </button>

      <NavLink to="/login" aria-label="login" title="login">
        <img
          className="navegation-icon navegation-icon__select"
          src="/images/login.svg"
          alt="login page"
          width="28"
          height="28"
        />
      </NavLink>
    </NavBarStyled>
  );
};

export default NavBar;
