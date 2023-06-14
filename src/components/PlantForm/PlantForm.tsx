import { useState } from "react";
import { PlantStructure } from "../../store/plant/types";
import PlantFormStyled from "./PlantFormStyled";

interface PlantFormProps {
  submitPlantForm: (plantData: PlantStructure) => void;
}

const PlantForm = ({ submitPlantForm }: PlantFormProps): React.ReactElement => {
  const initialPlantData: PlantStructure = {
    name: "",
    image: "",
    type: "",
    size: "",
    hasFlowers: false,
    environment: "",
    description: "",
  };

  const [plantData, setPlantData] = useState(initialPlantData);

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitPlantForm(plantData);
    setPlantData(initialPlantData);
  };

  const OnChangeInputs = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setPlantData({
      ...plantData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlantData({
      ...plantData,
      [event.target.id]: event.target.checked,
    });
  };

  const isDisabled =
    plantData.name !== "" &&
    plantData.image !== "" &&
    plantData.type !== "" &&
    plantData.size !== "" &&
    plantData.environment !== "" &&
    plantData.description !== "";

  return (
    <PlantFormStyled autoComplete="off" onSubmit={handleOnSubmit}>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="add-form-control__input"
          id="name"
          onChange={OnChangeInputs}
          value={plantData.name}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form__label" htmlFor="image">
          URL image
        </label>
        <input
          type="url"
          className="add-form-control__input"
          id="image"
          onChange={OnChangeInputs}
          value={plantData.image}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Type
        </label>
        <input
          type="text"
          className="add-form-control__input"
          id="type"
          onChange={OnChangeInputs}
          value={plantData.type}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="size">
          Size
        </label>
        <input
          type="text"
          className="add-form-control__input"
          id="size"
          onChange={OnChangeInputs}
          value={plantData.size}
        />
      </div>
      <div className="add-form-control__has-flowers">
        <label className="add-form-control__label" htmlFor="hasFlowers">
          Has Flowers
        </label>
        <input
          type="checkbox"
          className="add-form-control__checkbox"
          id="hasFlowers"
          onChange={handleCheckbox}
          checked={plantData.hasFlowers}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__environment" htmlFor="environment">
          Environment
        </label>
        <select
          id="environment"
          className="add-form-control__select"
          onChange={OnChangeInputs}
          value={plantData.environment}
        >
          <option value="">type</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="add-form-control__description"
          onChange={OnChangeInputs}
          value={plantData.description}
        ></textarea>
      </div>

      <button type="submit" className="add-form__button" disabled={!isDisabled}>
        Create
      </button>
    </PlantFormStyled>
  );
};

export default PlantForm;
