import { plantsMocks } from "../../mocks/plantsMocks";
import {
  PlantState,
  loadPlantsActionCreator,
  plantReducer,
} from "./plantSlice";
import { PlantDataStructure } from "./types";

describe("Given an userReducer", () => {
  describe("When it receives an empty initial state and a loadPlants action", () => {
    test("Then it should return the new state a list with 2 plants", () => {
      const initialPlantsState: PlantDataStructure[] = [];

      const currentState: PlantState = { plants: initialPlantsState };

      const plants = loadPlantsActionCreator(plantsMocks);

      const expectedNewPlantsState: PlantState = {
        ...initialPlantsState,
        plants: plantsMocks,
      };

      const newState: PlantState = plantReducer(currentState, plants);

      expect(expectedNewPlantsState).toStrictEqual(newState);
    });
  });
});
