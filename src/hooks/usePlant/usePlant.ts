import axios from "axios";
import { useCallback } from "react";
import { PlantState } from "../../store/plant/plantSlice";
import { PlantDataStructure } from "../../store/plant/types";
import { apiUrl } from "../useUser/useUser";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const usePlant = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getPlants = useCallback(async (): Promise<PlantDataStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());

      const req = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const {
        data: { plants },
      } = await axios.get<PlantState>(`${apiUrl}/plants`, req);
      dispatch(hideLoadingActionCreator());

      return plants;
    } catch {
      throw new Error("Can't get the list of plants");
    }
  }, [dispatch, token]);
  return { getPlants };
};

export default usePlant;
