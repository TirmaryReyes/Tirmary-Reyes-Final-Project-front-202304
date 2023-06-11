import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PlantForm from "./PlantForm";

describe("Given a AddPlantForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with a text that says 'Create'", () => {
      renderWithProviders(wrapWithRouter(<PlantForm />));

      const expectedText = "Create";

      const title = screen.getByRole("button", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
