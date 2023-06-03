import { NavLink, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";
import { logoutUserActionCreator } from "../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import paths from "../../routers/paths";

const NavBar = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    navigate(`${paths.home}`);
  };

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

      {isLogged ? (
        <button
          className="button__logout"
          aria-label="logout"
          onClick={logoutOnClick}
        >
          <img
            className="navegation-icon"
            src="/images/logout.svg"
            alt="logout"
            width="28"
            height="28"
          />
        </button>
      ) : (
        <NavLink to="/login" aria-label="login" title="login">
          <img
            className="navegation-icon navegation-icon__select"
            src="/images/login.svg"
            alt="login page"
            width="28"
            height="28"
          />
        </NavLink>
      )}
    </NavBarStyled>
  );
};

export default NavBar;
