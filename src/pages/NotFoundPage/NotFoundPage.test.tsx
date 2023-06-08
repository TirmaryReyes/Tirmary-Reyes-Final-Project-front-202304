import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When its rendered", () => {
    test("Then it should show '404' inside a heading", () => {
      const expectedText = "404";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const heading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
