import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/containerStyled";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <NavBar />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
