import { screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { tokenMock } from "../../mocks/userMocks";
import { renderWithProviders } from "../../testUtils/testUtils";
import appRouter from "./appRouter";

localStorage.setItem("token", tokenMock);

describe("Given a appRouter", () => {
  describe("When rendered and a token exists in local storage", () => {
    test("Then it should show the 'home page' and 'login' links", () => {
      const linkNames = ["home page", "login"];

      renderWithProviders(<RouterProvider router={appRouter} />);

      linkNames.forEach((linkName) => {
        const link = screen.getByRole("link", {
          name: linkName,
        });

        expect(link).toBeInTheDocument();
      });
    });
  });
});
