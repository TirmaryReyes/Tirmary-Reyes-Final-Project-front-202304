import PlantForm from "../../components/PlantForm/PlantForm";
import AddPlantStyled from "./AddPlantPageStyled";

const AddPlantPage = (): React.ReactElement => {
  return (
    <AddPlantStyled>
      <h1 className="add-page__title">Add Plants</h1>
      <PlantForm />
    </AddPlantStyled>
  );
};

export default AddPlantPage;
