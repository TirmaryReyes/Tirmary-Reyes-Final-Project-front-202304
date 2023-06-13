import { screen } from "@testing-library/react";
import { plantMock, plantsMocks } from "../../mocks/plantsMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PlantsList from "./PlantsList";
import userEvent from "@testing-library/user-event";

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

  describe("When it was rendered the button delete was clicked", () => {
    test("Then it should show a list without the deleted plant", async () => {
      const plantsStore = {
        plants: {
          plants: plantMock,
        },
      };
      renderWithProviders(wrapWithRouter(<PlantsList />), {
        user: {
          id: "555083660ca1f98975830aaa",
          isLogged: true,
          name: "",
          token: "",
        },
        plants: plantsStore.plants,
      });

      const heading = screen.getByRole("heading", { name: "Aloe Vera" });
      const deleteButton = screen.getByRole("button", { name: "delete" });

      await userEvent.click(deleteButton);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
