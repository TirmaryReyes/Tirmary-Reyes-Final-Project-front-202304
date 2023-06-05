import styled from "styled-components";

const PlantCardStyled = styled.article`
  width: 260px;
  height: 300px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  position: relative;

  .plant-card {
    &__image {
      object-fit: cover;
      border-radius: 12px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding: 7px;
    }
    &__name {
      margin-bottom: 2px;
      font-weight: 700;
    }
    &__name {
      font-weight: 700;
    }
  }
`;
export default PlantCardStyled;
