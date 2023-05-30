import Layout from "./Layout";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a Sand Rose logo", () => {
      const expectedAltText = "Sand Rose logo";

      renderWithProviders(<Layout />);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
