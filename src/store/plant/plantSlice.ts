import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlantDataStructure } from "./types";

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
  },
});

export const { loadPlants: loadPlantsActionCreator } = plantSlice.actions;
export const plantReducer = plantSlice.reducer;
