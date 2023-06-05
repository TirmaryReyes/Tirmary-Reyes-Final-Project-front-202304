import PlantsList from "../../components/PlantsList/PlantsList.js";
import { plantsMocks } from "../../mocks/plantsMocks.js";
import { useAppDispatch } from "../../store/index.js";
import { loadPlantsActionCreator } from "../../store/plant/plantSlice.js";
import PlantsPageStyled from "./PlantsPageStyled.js";

const PlantsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadPlantsActionCreator(plantsMocks));

  return (
    <PlantsPageStyled>
      <h1 className="list-title">Welcome to our plants list!</h1>
      <PlantsList />
    </PlantsPageStyled>
  );
};

export default PlantsPage;
