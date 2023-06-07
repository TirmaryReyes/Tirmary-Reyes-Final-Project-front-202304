import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useCallback } from "react";
import paths from "../../routers/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.post<{ token: string }>(
          `${apiUrl}${paths.user}${paths.login}`,
          userCredentials
        );
        dispatch(hideLoadingActionCreator());

        return data.token;
      } catch {
        throw new Error("Wrong Credential");
      }
    },
    [dispatch]
  );
  return {
    getUserToken,
  };
};

export default useUser;
