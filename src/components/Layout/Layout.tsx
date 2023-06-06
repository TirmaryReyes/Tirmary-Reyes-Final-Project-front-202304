import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
