import { PlantDataStructure } from "../../store/plant/types";

interface PlantsCardProps {
  plant: PlantDataStructure;
}

export const PlantCard = ({ plant }: PlantsCardProps): React.ReactElement => {
  return (
    <>
      <div>
        <img
          className="card-image"
          src={plant.image}
          alt={plant.name}
          width={260}
          height={234}
        />
        <article className="plant-card__info-container">
          <h2 className="plant-card_name">
            {plant.name}
            {plant.environment}
          </h2>
        </article>
      </div>
    </>
  );
};
