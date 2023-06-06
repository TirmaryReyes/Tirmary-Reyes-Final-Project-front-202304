import { renderHook } from "@testing-library/react";
import { plantsMocks } from "../../mocks/plantsMocks";
import usePlant from "./usePlant";
import { wrapper } from "../../testUtils/testUtils";
import { PlantDataStructure } from "../../store/plant/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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
