import { PlantDataStructure } from "../../store/plant/types";
import Button from "../Button/Button";
import PlantCardStyled from "./PlantCardStyled";

interface PlantsCardProps {
  plant: PlantDataStructure;
  isLazy?: "eager" | "lazy";
}

export const PlantCard = ({
  plant,
  isLazy,
}: PlantsCardProps): React.ReactElement => {
  return (
    <PlantCardStyled>
      <img
        loading={isLazy}
        className="plant-card__image"
        src={plant.image}
        alt={plant.name}
        width={260}
        height={234}
      />
      <Button className="plant-card__button-modify" text={""}>
        <img
          className="plant-card__modify"
          src="images/button-modify.svg"
          alt="modify icon"
          width={28}
          height={28}
        />
      </Button>
      <Button className="plant-card__button-delete" text={""}>
        <img
          className="plant-card__delete"
          src="images/button-delete.svg"
          alt="modify icon"
          width={28}
          height={28}
        />
      </Button>
      <div className="plant-card__info">
        <h2 className="plant-card__name">{plant.name}</h2>
        <span className="plant-card__environment"> {plant.environment}</span>
      </div>
    </PlantCardStyled>
  );
};
