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

    &__button-modify {
      background-color: ${(props) => props.theme.colors.secondary};
      width: 48px;
      height: 48px;
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      border-left: 2px solid ${(props) => props.theme.colors.primary};
      border-radius: 0px 12px;
      position: absolute;
      top: 0;
      right: 0;
    }

    &__button-delete {
      background-color: ${(props) => props.theme.colors.secondary};
      position: absolute;
      border-top: 2px solid ${(props) => props.theme.colors.primary};
      border-left: 2px solid ${(props) => props.theme.colors.primary};
      border-radius: 0px 12px;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 12px 0px;
    }
  }
`;
export default PlantCardStyled;
