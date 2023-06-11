import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import AddPlantPage from "./AddPlantPage";

describe("Given a AddPlantPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Add Plants' title", () => {
      const expectedTitle = "Add Plants";

      renderWithProviders(<AddPlantPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
