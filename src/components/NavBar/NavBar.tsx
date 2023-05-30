import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <NavLink to="/" aria-label="home" title="home">
        <img
          className="navegation-icon navegation-icon__select"
          src="/images/home.svg"
          alt="home page"
          width="22"
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
          className="navegation-icon navegation-icon__select"
          src="/images/logout.svg"
          alt="logout"
          width="22"
          height="28"
        />
      </button>
    </NavBarStyled>
  );
};

export default NavBar;
