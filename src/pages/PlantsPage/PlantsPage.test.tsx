import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PlantsList from "./PlantsPage";

describe("Given a PlantsList page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Welcome to our plants list!' title", () => {
      const expectedTitle = "Welcome to our plants list!";

      renderWithProviders(<PlantsList />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
