import { render, screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddPlantPage from "./AddPlantPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
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
  describe("When it is rendered and the handleOnClick function is invoked", () => {
    test("Then it should redirect the user to the home page and show the title 'Add Plants'", async () => {
      const expectedTitle = "Add Plants";

      const routes: RouteObject[] = [
        { path: "/", element: <AddPlantPage /> },
        { path: "/home", element: <PlantsList /> },
      ];

      const router = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      );

      const nameLabel = "Name";
      const imageLabel = "URL image";
      const typeLabel = "Type";
      const sizeLabel = "Size";
      const descriptionLabel = "Description";
      const environmentLabel = "Environment";

      const nameTextField = "Ficus";
      const imageTextField = "http://pictureofpenny.webp";
      const typeTextField = "Ficus";
      const sizeTextField = "large";
      const environmentTextField = "Indoor";
      const descriptionTextField =
        "Popular indoor plant with glossy leaves that prefers bright.";

      await userEvent.type(screen.getByLabelText(nameLabel), nameTextField);
      await userEvent.type(screen.getByLabelText(typeLabel), typeTextField);
      await userEvent.type(screen.getByLabelText(imageLabel), imageTextField);
      await userEvent.type(screen.getByLabelText(sizeLabel), sizeTextField);
      await userEvent.type(
        screen.getByLabelText(descriptionLabel),
        descriptionTextField
      );
      await userEvent.type(
        screen.getByLabelText(environmentLabel),
        environmentTextField
      );

      const addButton = screen.getByRole("button", { name: "Create" });

      await userEvent.click(addButton);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(router.state.location.pathname).toBe("/");
      expect(title).toBeInTheDocument();
    });
  });
});
