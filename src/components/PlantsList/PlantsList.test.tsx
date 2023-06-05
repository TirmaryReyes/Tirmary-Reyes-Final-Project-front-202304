import { screen } from "@testing-library/react";
import { plantsMocks } from "../../mocks/plantsMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PlantsList from "./PlantsList";

describe("Given a PlantList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show one plant card with its name", () => {
      const expectedText = plantsMocks[0].name;

      const plantsStore = {
        plants: {
          plants: plantsMocks,
        },
      };
      renderWithProviders(wrapWithRouter(<PlantsList />), plantsStore);

      const expectedCard = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedCard).toBeInTheDocument();
    });
  });
});
