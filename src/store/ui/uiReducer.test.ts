import { UiStructure } from "./types";
import {
  hideFeedbackActionCreator,
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives an UI state and a showLoading action", () => {
    test("The it should toogle the isLoading property to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        modal: { isError: true, message: "", isVisible: true },
      };

      const expectedState: UiStructure = {
        isLoading: true,
        modal: { isError: true, message: "", isVisible: true },
      };

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedState);
    });
  });
});

describe("Given a hiddeLoading reducer", () => {
  describe("When it receives an ui state and a hideloading action", () => {
    test("Then it should toogle the isLoading property to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: { isError: false, message: "", isVisible: false },
      };

      const expectedState: UiStructure = {
        isLoading: false,
        modal: { isError: false, message: "", isVisible: false },
      };

      const newState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newState).toStrictEqual(expectedState);
    });
  });
});

describe("Given a showFeedback reducer", () => {
  describe("When it receives an isError property set to true as payload", () => {
    test("Then it should return a new state with that property set to true", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: { isError: false, message: "", isVisible: false },
      };

      const newCurrentUiState: UiStructure = {
        isLoading: true,
        modal: { isError: false, message: "", isVisible: false },
      };

      const expectedNewState = uiReducer(
        currentUiState,
        showFeedbackActionCreator({
          isError: false,
          message: "",
          isVisible: false,
        })
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a hideModal feedback", () => {
  describe("When it has an state with the property isVisible to true", () => {
    test("Then it should return the new state with the property to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: { isError: false, message: "", isVisible: false },
      };

      const newCurrentUiState: UiStructure = {
        isLoading: true,
        modal: { isError: false, message: "", isVisible: false },
      };

      const expectedNewState = uiReducer(
        currentUiState,
        hideFeedbackActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
