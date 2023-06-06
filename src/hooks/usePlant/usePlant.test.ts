import { renderHook } from "@testing-library/react";
import { plantsMocks } from "../../mocks/plantsMocks";
import usePlant from "./usePlant";
import { wrapper } from "../../testUtils/testUtils";
import { PlantDataStructure } from "../../store/plant/types";

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
});
