import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a Sand Rose logo", () => {
      const expectedAltText = "Sand Rose logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
