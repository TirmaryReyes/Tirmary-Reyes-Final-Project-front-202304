import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  PlantApiStructure,
  PlantDataStructure,
  PlantIdStructure,
} from "./types";

export interface PlantState {
  plants: PlantDataStructure[];
}

export const initialPlantState: PlantState = {
  plants: [],
};

const plantSlice = createSlice({
  name: "plant",
  initialState: initialPlantState,
  reducers: {
    loadPlants: (
      currentPlant: PlantState,
      action: PayloadAction<PlantDataStructure[]>
    ): PlantState => ({
      ...currentPlant,
      plants: [...action.payload],
    }),

    removePlant: (
      currentPlant: PlantApiStructure,
      action: PayloadAction<PlantIdStructure>
    ): PlantApiStructure => ({
      ...currentPlant,
      plants: currentPlant.plants.filter(
        (plant) => plant.id !== action.payload.idPlant
      ),
    }),

    addPlant: (
      currentPlantState: PlantApiStructure,
      action: PayloadAction<PlantDataStructure>
    ): PlantApiStructure => ({
      ...currentPlantState,
      plants: [...currentPlantState.plants, action.payload],
    }),
  },
});

export const {
  loadPlants: loadPlantsActionCreator,
  removePlant: removePlantActionCreator,
  addPlant: addPlantActionCreator,
} = plantSlice.actions;
export const plantReducer = plantSlice.reducer;
