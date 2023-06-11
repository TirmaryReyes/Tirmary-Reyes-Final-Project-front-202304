import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddPlantForm from "./AddPlantForm";

describe("Given a AddPlantForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with a text that says 'Create'", () => {
      renderWithProviders(wrapWithRouter(<AddPlantForm />));

      const expectedText = "Create";

      const title = screen.getByRole("button", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
