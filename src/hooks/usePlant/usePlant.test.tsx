import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import { anotherPlant, onePLant, plantsMocks } from "../../mocks/plantsMocks";
import usePlant from "./usePlant";
import {
  renderWithProviders,
  wrapWithProviders,
  wrapper,
} from "../../testUtils/testUtils";
import { PlantDataStructure } from "../../store/plant/types";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { vi } from "vitest";
import { store } from "../../store";
import {
  notAddedModal,
  notRemovedModal,
  removedModal,
} from "../../components/Modal/feedback";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../components/Layout/Layout";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a getPlants function", () => {
  describe("When is called", () => {
    test("Then it should return a list of plants", async () => {
      const plantList: PlantDataStructure[] = plantsMocks;

      const {
        result: {
          current: { getPlants },
        },
      } = renderHook(() => usePlant(), { wrapper: wrapper });

      const plants = await getPlants();

      expect(plants).toStrictEqual(plantList);
    });
  });

  describe("When it's called but can't connect to the Api Rest", () => {
    test("Then it should throw a 'Can't get the list of plants' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Can't get the list of plants";

      const {
        result: {
          current: { getPlants },
        },
      } = renderHook(() => usePlant(), { wrapper: wrapper });

      const listPlant = getPlants();

      expect(listPlant).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a deletePlant function", () => {
  const id = plantsMocks[0].id;
  describe("When it's invoked with an plant id ", () => {
    test("Then it should show a feedback modal of succed with 'Plant removed'", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { deletePlant },
        },
      } = renderHook(() => usePlant(), { wrapper: wrapper });

      const response = await deletePlant(id);

      expect(response).toBeUndefined();
    });

    describe("When it is invoked with a valid plant id", () => {
      test("Then it should show a modal with the text 'Plant removed'", async () => {
        const id = plantsMocks[0].id;

        const {
          result: {
            current: { getPlant },
          },
        } = renderHook(() => usePlant(), { wrapper: wrapper });

        await getPlant(id);

        const message = store.getState().ui.modal.message;

        expect(message).toBe(removedModal.message);
      });
    });

    describe("When it invoked with a non-existent plant id", () => {
      test("Then it should show a modal with the text 'Plant could not be removed'", async () => {
        server.resetHandlers(...errorHandlers);

        const id = plantsMocks[0].id;

        const {
          result: {
            current: { deletePlant },
          },
        } = renderHook(() => usePlant(), { wrapper: wrapper });

        await deletePlant(id);

        const message = store.getState().ui.modal.message;

        expect(message).toBe(notRemovedModal.message);
      });
    });
  });
});

describe("Given a addPlant function", () => {
  describe("When it's called with a new plant data like a plant 'Aloe Vera'", () => {
    test("Then it should return the card of the new plant 'Aloe Vera'", async () => {
      const expectedNewPlant = onePLant;
      const {
        result: {
          current: { addPlant },
        },
      } = renderHook(() => usePlant(), { wrapper: wrapper });

      const response = await addPlant(anotherPlant);

      expect(response).toStrictEqual(expectedNewPlant);
    });
  });

  describe("When it's called but there was problem on adding", () => {
    test("Then it should show a feedback message with the text 'Plant could not be added'", async () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { addPlant },
        },
      } = renderHook(() => usePlant(), { wrapper: wrapper });

      await addPlant(onePLant);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(notAddedModal.message);
    });
  });
});

describe("", () => {
  describe("When it is called with an invalid microId", () => {
    test("Then it should show feedback indicating that the micro was delete with the text 'Dang it! The micro could not be deleted.'", async () => {
      server.resetHandlers(...errorHandlers);

      const idPlant = "647f1363442e3dbaa505de59";

      const {
        result: {
          current: { getPlant },
        },
      } = renderHook(() => usePlant(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await getPlant(idPlant);

      const message = await screen.getByAltText("feedback icon");

      expect(message).toBeInTheDocument();
    });
  });
});
