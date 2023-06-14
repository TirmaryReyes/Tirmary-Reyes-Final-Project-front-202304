import { plantsMocks } from "../../mocks/plantsMocks";
import {
  PlantState,
  addPlantActionCreator,
  loadPlantsActionCreator,
  plantReducer,
  removePlantActionCreator,
} from "./plantSlice";
import { PlantApiStructure, PlantDataStructure } from "./types";

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

describe("Given a deletePlant reducer", () => {
  describe("When it has a list of plants as a current state and it receives a valid plant id", () => {
    test("Then it should return a new list without the plant linked to the id", () => {
      const currentPlant: PlantApiStructure = {
        plants: plantsMocks,
      };

      const expectedNewPlantState = {
        ...currentPlant,
        plants: plantsMocks.slice(0, 1),
      };

      const newPlantState = plantReducer(
        currentPlant,
        removePlantActionCreator({ idPlant: "647083660ca1f98975830bmmm0b" })
      );

      expect(newPlantState).toStrictEqual(expectedNewPlantState);
    });
  });

  describe("When it receives a list of plants and a new plant and it's data", () => {
    test("Then it should return a new state of the list with the new plant that was created", () => {
      const currentPlantState: PlantApiStructure = {
        plants: [plantsMocks[0]],
      };

      const newPlantState: PlantApiStructure = plantReducer(
        currentPlantState,
        addPlantActionCreator(plantsMocks[1])
      );

      expect(newPlantState).toStrictEqual({ plants: plantsMocks });
    });
  });
});
