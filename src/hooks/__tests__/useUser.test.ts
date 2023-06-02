import { renderHook } from "@testing-library/react";
import { UserCredentials } from "../../store/user/types";
import useUser from "../useUser/useUser";
import { tokenMock } from "../../mocks/userMocks";

describe("Given a useUser custom hook", () => {
  describe("When calls getUserToken function with valid username and password", () => {
    test("Then it should return a user token", async () => {
      const mockUserCredentials: UserCredentials = {
        username: "Pepito",
        password: "Pepito",
      };
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });
});
