import { UiStructure } from "./types";
import { showLoadingAactionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives an UI state and a showLoading action", () => {
    test("The it should toogle the isLoading property to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
      };

      const expectedState: UiStructure = {
        isLoading: true,
      };

      const newState = uiReducer(currentUiState, showLoadingAactionCreator());

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
