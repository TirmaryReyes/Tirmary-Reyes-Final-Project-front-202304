import styled from "styled-components";

const AddPlantStyled = styled.main`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  padding: 10px;

  .add-page {
    &__title {
      margin: 0 auto;
      padding: 0 20px;
      width: 300px;
    }
  }
`;

export default AddPlantStyled;
