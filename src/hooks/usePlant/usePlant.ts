import axios from "axios";
import { useCallback } from "react";
import { PlantState } from "../../store/plant/plantSlice";
import { PlantDataStructure, PlantStructure } from "../../store/plant/types";
import { apiUrl } from "../useUser/useUser";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import {
  addedModal,
  listUnavailable,
  notAddedModal,
  notRemovedModal,
  removedModal,
} from "../../components/Modal/feedback";
import paths from "../../routers/paths";

const usePlant = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const axiosReqAuthorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getPlants = useCallback(async (): Promise<
    PlantDataStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { plants },
      } = await axios.get<PlantState>(`${apiUrl}/plants`);
      dispatch(hideLoadingActionCreator());

      return plants;
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: listUnavailable.message,
        })
      );
      throw new Error("Can't get the list of plants");
    }
  }, [dispatch]);

  const deletePlant = async (idPlant: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete(
        `${apiUrl}${paths.plants}/${idPlant}`,
        axiosReqAuthorization
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: false,
          isVisible: true,
          message: removedModal.message,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: notRemovedModal.message,
        })
      );
    }
  };

  const addPlant = async (
    plantData: PlantStructure
  ): Promise<PlantDataStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { plant },
      } = await axios.post<{ plant: PlantDataStructure }>(
        `${apiUrl}${paths.plants}/add`,
        plantData,
        axiosReqAuthorization
      );
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          isVisible: true,
          message: addedModal.message,
        })
      );

      return plant;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: notAddedModal.message,
        })
      );
    }
  };

  const getPlant = async (
    idPlant: string
  ): Promise<PlantStructure | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { plant },
      } = await axios.get<{
        plant: PlantStructure;
      }>(`${apiUrl}/plants/${idPlant}`);

      dispatch(hideLoadingActionCreator());

      return plant;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isVisible: true,
          message: notAddedModal.message,
        })
      );
    }
  };

  return { getPlants, deletePlant, addPlant, getPlant };
};

export default usePlant;
