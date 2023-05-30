import { Outlet } from "react-router-dom";
import ContainerStyled from "../App/shared/containerStyled";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
