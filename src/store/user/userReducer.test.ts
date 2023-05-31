import {
  InitialStateUserMock,
  LoggedStateUserMock,
  userTokenStructureMock,
} from "../../mocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an empty user state and a loginUser action with a user and its data", () => {
    test("Then it should return a new state with the user logged", () => {
      const currentUserState = InitialStateUserMock;

      const expectedNewUserState = LoggedStateUserMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userTokenStructureMock)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});
