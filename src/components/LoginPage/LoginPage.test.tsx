import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginPage from "./LoginPage";

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
