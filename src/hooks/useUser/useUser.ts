import axios from "axios";
import { useCallback } from "react";
import { UserCredentials } from "../../store/user/types";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string> => {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}user/login`,
        userCredentials
      );
      return token;
    },
    []
  );

  return {
    getUserToken,
  };
};

export default useUser;
