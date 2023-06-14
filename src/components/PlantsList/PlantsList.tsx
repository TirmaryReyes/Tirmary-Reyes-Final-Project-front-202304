import usePlant from "../../hooks/usePlant/usePlant";
import { useAppDispatch, useAppSelector } from "../../store";
import { removePlantActionCreator } from "../../store/plant/plantSlice";
import { PlantCard } from "../PlantCard/PlantCard";
import PlantsListStyled from "./PlantsListStyled";

const PlantsList = (): React.ReactElement => {
  const { plants } = useAppSelector((state) => state.plants);
  const dispatch = useAppDispatch();

  const { deletePlant } = usePlant();

  const deleteOnClick = async (idPlant: string) => {
    await deletePlant(idPlant);
    dispatch(removePlantActionCreator({ idPlant: idPlant }));
  };

  return (
    <PlantsListStyled>
      {plants.map((plant, index) => (
        <li key={plant.id}>
          <PlantCard
            isLazy={index < 4 ? "eager" : "lazy"}
            plant={plant}
            actionOnclick={deleteOnClick}
          />
        </li>
      ))}
    </PlantsListStyled>
  );
};

export default PlantsList;
