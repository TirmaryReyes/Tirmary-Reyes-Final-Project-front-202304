import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddPlantPage from "./AddPlantPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";
import PlantsList from "../../components/PlantsList/PlantsList";

describe("Given a AddPlantPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Add Plants' title", () => {
      const expectedTitle = "Add Plants";

      renderWithProviders(wrapWithRouter(<AddPlantPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it's rendered and all the inputs fields are filled in and clicks the button", () => {
    test("Then it should show a positive feedback with the message 'Plant added'", async () => {
      const plantFormLabels = [
        "Name",
        "URL image",
        "Type",
        "Size",
        "Environment",
        "Description",
      ];

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <AddPlantPage />,
        },
        {
          path: "/plants",
          element: <PlantsList />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const nameInputField = screen.getByLabelText(plantFormLabels[0]);
      const urlImageInputField = screen.getByLabelText(plantFormLabels[1]);
      const typeInputField = screen.getByLabelText(plantFormLabels[2]);
      const sizeInputField = screen.getByLabelText(plantFormLabels[3]);
      const environmentInputField = screen.getByLabelText(plantFormLabels[4]);
      const descriptionInputField = screen.getByLabelText(plantFormLabels[5]);

      const nameTextField = "Ficus";
      const urlImageTextField = "https://i.ibb.co/R6yy3nN/ficus.com";
      const typeTextField = "Ficus";
      const sizeTextField = "large";
      const environmentTextField = "Indoor";
      const descriptionTextField =
        "Popular indoor plant with glossy leaves that prefers bright, indirect";

      await userEvent.type(nameInputField, nameTextField);
      await userEvent.type(urlImageInputField, urlImageTextField);
      await userEvent.type(typeInputField, typeTextField);
      await userEvent.type(sizeInputField, sizeTextField);
      await userEvent.selectOptions(
        environmentInputField,
        environmentTextField
      );
      await userEvent.type(descriptionInputField, descriptionTextField);

      const createButton = screen.getByRole("button");

      await userEvent.click(createButton);

      const message = store.getState().ui.modal.message;

      expect(message).toBe("Plant added");
    });
  });
});
