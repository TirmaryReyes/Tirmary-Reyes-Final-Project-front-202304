import { UserStateStructure, UserTokenStructure } from "../store/user/types";

export const InitialStateUserMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};
export const userTokenStructureMock: UserTokenStructure = {
  name: "Mario",
  id: "5",
  token: "849d0hd4s5jd6h6j6",
};

export const LoggedStateUserMock: UserStateStructure = {
  ...userTokenStructureMock,
  isLogged: true,
};
