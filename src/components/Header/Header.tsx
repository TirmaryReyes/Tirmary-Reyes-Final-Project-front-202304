import NavBar from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="image-logo"
        src="/images/logo-sand-rose.svg"
        alt="Sand Rose logo"
        width="230"
        height="90"
      ></img>
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
