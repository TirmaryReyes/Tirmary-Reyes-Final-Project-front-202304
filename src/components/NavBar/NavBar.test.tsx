import { screen } from "@testing-library/react";
import NavBar from "./NavBar.js";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a NavBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 2 links: login, add and home", () => {
      renderWithProviders(wrapWithRouter(<NavBar />));

      const createLink = screen.getByRole("link", { name: "add" });
      const homeLink = screen.getByRole("link", { name: "home" });

      expect(createLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
    });
  });
});
