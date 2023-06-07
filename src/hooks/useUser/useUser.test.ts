import { renderHook } from "@testing-library/react";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";
import { tokenMock } from "../../mocks/userMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapper } from "../../testUtils/testUtils";

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
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(mockUserCredentials);

      expect(token).toBe(tokenMock);
    });
  });

  describe("When calls getUserToken with invalid credentials", () => {
    test("Then it should return a response method status with a 401", async () => {
      server.resetHandlers(...errorHandlers);

      const invalidUser: UserCredentials = {
        username: "Coco",
        password: "Coco",
      };

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const getToken = await getUserToken(invalidUser);

      expect(getToken).toBeUndefined();
    });
  });
});
