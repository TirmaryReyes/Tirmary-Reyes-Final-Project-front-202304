import { screen } from "@testing-library/react";
import NavBar from "./NavBar.js";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths.js";
import userEvent from "@testing-library/user-event";
import { loggedStateUserMock } from "../../mocks/userMocks.js";
import PlantsList from "../PlantsList/PlantsList.js";

describe("Given a NavBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 2 links: login, add and home", () => {
      renderWithProviders(wrapWithRouter(<NavBar />));

      const expectedText = "home page";

      const homeLink = screen.getByRole("link", { name: expectedText });

      expect(homeLink).toBeInTheDocument();
    });
  });
});

describe("Given a logoutOnClick function", () => {
  describe("When the user is logged and click the logout button", () => {
    test("Then it should logout and redirect the user to the '/home' path", async () => {
      const route: RouteObject[] = [
        {
          path: "/",
          element: <NavBar />,
          children: [{ path: "/home", element: <PlantsList /> }],
        },
      ];

      const logout = "logout";

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />, {
        user: loggedStateUserMock,
      });

      const logoutButton = screen.getByRole("button", {
        name: logout,
      });

      await userEvent.click(logoutButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
