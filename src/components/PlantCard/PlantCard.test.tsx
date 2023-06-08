import { screen } from "@testing-library/react";
import { plantsMocks } from "../../mocks/plantsMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { PlantCard } from "./PlantCard";

describe("Given a PlantCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a plant's image", () => {
      const expectAltTextImage = plantsMocks[0].name;

      renderWithProviders(
        wrapWithRouter(
          <PlantCard
            plant={plantsMocks[0]}
            isLazy={plantsMocks.indexOf(plantsMocks[0]) < 1 ? "eager" : "lazy"}
          />
        )
      );
      const expectedImage = screen.getByRole("img", {
        name: expectAltTextImage,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
