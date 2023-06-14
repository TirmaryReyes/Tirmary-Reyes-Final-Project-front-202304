import { useNavigate } from "react-router-dom";
import PlantForm from "../../components/PlantForm/PlantForm";
import usePlant from "../../hooks/usePlant/usePlant";
import { useAppDispatch } from "../../store";
import { addPlantActionCreator } from "../../store/plant/plantSlice";
import AddPlantStyled from "./AddPlantPageStyled";
import paths from "../../routers/paths";
import { PlantStructure } from "../../store/plant/types";

const AddPlantPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addPlant } = usePlant();
  const navigate = useNavigate();

  const submitPlantForm = async (plantData: PlantStructure) => {
    const newPlant = await addPlant(plantData);

    if (newPlant) {
      dispatch(addPlantActionCreator(newPlant));
      navigate(paths.home);
    }
  };

  return (
    <AddPlantStyled>
      <h1 className="add-page__title">Add Plants</h1>
      <PlantForm submitPlantForm={submitPlantForm} />
    </AddPlantStyled>
  );
};

export default AddPlantPage;
