import { renderWithProviders } from "../../testUtils/testUtils";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Sand Rose", () => {
      const expectedAltText = "Sand Rose logo";

      renderWithProviders(<Header />);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
