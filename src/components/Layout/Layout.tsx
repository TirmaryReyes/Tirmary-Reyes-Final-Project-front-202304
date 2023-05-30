import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/containerStyled";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
