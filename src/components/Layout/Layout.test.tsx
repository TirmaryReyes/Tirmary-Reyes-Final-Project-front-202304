import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a Sand Rose logo", () => {
      const expectedAltText = "Sand Rose logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
  describe("When it's being rendered, but it's experiencing significant delays in reaching the intended page", () => {
    test("Then it should show a custom-loader", () => {
      const expectedLabelText = "custom-loader";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: true,
          modal: { isError: false, message: "", isVisible: false },
        },
      });

      const loadingSpinner = screen.getByLabelText(expectedLabelText);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
