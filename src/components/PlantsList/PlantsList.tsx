import { useAppSelector } from "../../store";
import { PlantCard } from "../PlantCard/PlantCard";
import PlantsListStyled from "./PlantsListStyled";

const PlantsList = (): React.ReactElement => {
  const { plants } = useAppSelector((state) => state.plants);

  return (
    <PlantsListStyled>
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard plant={plant} />
        </li>
      ))}
    </PlantsListStyled>
  );
};

export default PlantsList;
