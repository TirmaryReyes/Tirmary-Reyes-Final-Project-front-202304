import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Loader />
      <Header />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
