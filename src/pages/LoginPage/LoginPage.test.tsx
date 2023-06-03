import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import paths from "../../routers/paths";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says 'Log In'", () => {
      renderWithProviders(wrapWithRouter(<LoginPage />));

      const expectedText = "Log In";

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});

describe("Given a LoginPage component", () => {
  describe("When the user clicks the 'Login' button", () => {
    test("Then it should log in the user and redirects him to the '/' path", async () => {
      const usernameText = "Username";
      const passwordText = "Password";
      const usernameInputText = "Username";
      const passwordInputText = "Password";
      const buttonText = "Log in";

      const route: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/home",
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameTextField = screen.getByLabelText(usernameText);
      const passwordTextField = screen.getByLabelText(passwordText);
      const loginButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(usernameTextField, usernameInputText);
      await userEvent.type(passwordTextField, passwordInputText);
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
