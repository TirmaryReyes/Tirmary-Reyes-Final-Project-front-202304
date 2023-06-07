import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStructure, UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
  modal: {
    isError: false,
    message: "",
    isVisible: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),

    showFeedback: (
      currentState: UiStructure,
      action: PayloadAction<ModalStructure>
    ) => ({
      ...currentState,
      modal: {
        isError: action.payload.isError,
        message: action.payload.message,
        isVisible: action.payload.isVisible,
      },
    }),

    hideFeedback: (currentState: UiStructure) => ({
      ...currentState,
      modal: { isError: false, message: "", isVisible: false },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  hideFeedback: hideFeedbackActionCreator,
  showFeedback: showFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
