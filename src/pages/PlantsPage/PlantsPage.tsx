import { useEffect } from "react";
import PlantsList from "../../components/PlantsList/PlantsList.js";
import { useAppDispatch } from "../../store/index.js";
import { loadPlantsActionCreator } from "../../store/plant/plantSlice.js";
import PlantsPageStyled from "./PlantsPageStyled.js";
import usePlant from "../../hooks/usePlant/usePlant.js";

const PlantsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getPlants } = usePlant();

  useEffect(() => {
    (async () => {
      const plants = await getPlants();
      if (plants) dispatch(loadPlantsActionCreator(plants));
    })();
  }, [dispatch, getPlants]);

  return (
    <PlantsPageStyled>
      <h1 className="list-title">Welcome to our plants list!</h1>
      <PlantsList />
    </PlantsPageStyled>
  );
};

export default PlantsPage;
