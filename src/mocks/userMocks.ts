import { UserStateStructure, UserTokenStructure } from "../store/user/types";

export const InitialStateUserMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};
export const userTokenStructureMock: UserTokenStructure = {
  name: "admin",
  id: "647083660ca1f98975830b0b",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODM2NjBjYTFmOTg5NzU4MzBiMGIiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3MDA0NTF9.SQmMo1PUHezRuU1xm2fYacVWiSHRYvM3qdqbI3ygCA4",
};

export const loggedStateUserMock: UserStateStructure = {
  ...userTokenStructureMock,
  isLogged: true,
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODM2NjBjYTFmOTg5NzU4MzBiMGIiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU3MDA0NTF9.SQmMo1PUHezRuU1xm2fYacVWiSHRYvM3qdqbI3ygCA4";
