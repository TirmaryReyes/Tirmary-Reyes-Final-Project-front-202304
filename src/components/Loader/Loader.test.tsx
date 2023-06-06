import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Loader from "./Loader";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a custom-loader", () => {
      const expectedAltTex = "custom-loader";

      renderWithProviders(<Loader />);

      const loadingSpinner = screen.getByLabelText(expectedAltTex);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
