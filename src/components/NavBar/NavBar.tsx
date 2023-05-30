import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <NavLink to="/" aria-label="home" title="home">
        <img
          className="navegation__icon"
          src="/images/home.svg"
          alt="home page"
          width="260"
          height="45"
        />
      </NavLink>
      <NavLink to="/add" aria-label="add" title="add">
        <img
          className="navegation__icon"
          src="/images/add.svg"
          alt="add page"
          width="260"
          height="45"
        />
      </NavLink>
      <NavLink to="/logout" aria-label="logout" title="logout">
        <img
          className="navegation__icon"
          src="/images/logout.svg"
          alt="logout"
          width="260"
          height="45"
        />
      </NavLink>
    </NavBarStyled>
  );
};

export default NavBar;
