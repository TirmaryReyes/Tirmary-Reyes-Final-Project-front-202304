import { PlantDataStructure } from "../../store/plant/types";
import PlantCardStyled from "./PlantCardStyled";

interface PlantsCardProps {
  plant: PlantDataStructure;
}

export const PlantCard = ({ plant }: PlantsCardProps): React.ReactElement => {
  return (
    <PlantCardStyled>
      <img
        className="plant-card__image"
        src={plant.image}
        alt={plant.name}
        width={260}
        height={234}
      />

      <div className="plant-card__info">
        <h2 className="plant-card__name">{plant.name}</h2>
        <span className="plant-card__environment"> {plant.environment}</span>
      </div>
    </PlantCardStyled>
  );
};
