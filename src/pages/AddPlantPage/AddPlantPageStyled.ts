import styled from "styled-components";

const AddPlantStyled = styled.main`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  width: 150px;
`;

export default AddPlantStyled;