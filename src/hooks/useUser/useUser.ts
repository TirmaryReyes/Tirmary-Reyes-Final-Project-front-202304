import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useCallback } from "react";
import paths from "../../routers/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { wrongCredential } from "../../components/Modal/feedback";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.post<{ token: string }>(
          `${apiUrl}${paths.user}${paths.login}`,
          userCredentials
        );
        dispatch(hideLoadingActionCreator());

        return data.token;
      } catch {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: wrongCredential.message,
            isVisible: true,
          })
        );
      }
    },
    [dispatch]
  );
  return {
    getUserToken,
  };
};

export default useUser;
