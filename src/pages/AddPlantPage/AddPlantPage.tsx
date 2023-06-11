import AddPlantForm from "../../components/AddPlantForm/AddPlantForm";
import AddPlantStyled from "./AddPlantPageStyled";

const AddPlantPage = (): React.ReactElement => {
  return (
    <AddPlantStyled>
      <h1 className="add-page__title">Add Plants</h1>
      <AddPlantForm></AddPlantForm>
    </AddPlantStyled>
  );
};

export default AddPlantPage;
