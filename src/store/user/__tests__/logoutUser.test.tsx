import {
  InitialStateUserMock,
  LoggedStateUserMock,
} from "../../../mocks/userMocks";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser reducer", () => {
  describe("When it is called", () => {
    test("Then it should reset state to initialUserState", () => {
      const currentState = LoggedStateUserMock;

      const resetState = userReducer(currentState, logoutUserActionCreator());

      expect(resetState).toStrictEqual(InitialStateUserMock);
    });
  });
});
