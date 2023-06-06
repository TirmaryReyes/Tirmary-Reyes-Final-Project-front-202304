import axios from "axios";
import { useCallback } from "react";
import { PlantState } from "../../store/plant/plantSlice";
import { PlantDataStructure } from "../../store/plant/types";
import { apiUrl } from "../useUser/useUser";

const usePlant = () => {
  const getPlants = useCallback(async (): Promise<PlantDataStructure[]> => {
    const {
      data: { plants },
    } = await axios.get<PlantState>(`${apiUrl}/plants`);

    return plants;
  }, []);

  return { getPlants };
};

export default usePlant;
