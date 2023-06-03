import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { userTokenStructureMock } from "../../mocks/userMocks";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the user data and a token", () => {
      const { token } = userTokenStructureMock;

      const { result } = renderHook(() => useToken());
      const { getTokenData } = result.current;

      const tokenData = getTokenData(token);

      expect(tokenData).toStrictEqual(userTokenStructureMock);
    });
  });
});
