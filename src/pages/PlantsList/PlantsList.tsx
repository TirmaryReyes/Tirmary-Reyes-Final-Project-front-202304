import { plantsMocks } from "../../mocks/plantsMocks.js";
import { useAppDispatch } from "../../store";
import { loadPlantsActionCreator } from "../../store/plant/plantSlice.js";
import PlantsListStyled from "./PlantsListStyled";

const PlantsList = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadPlantsActionCreator(plantsMocks));

  return (
    <PlantsListStyled>
      <h1 className="list-title">Welcome to our plants list!</h1>
    </PlantsListStyled>
  );
};

export default PlantsList;
