import styled from "styled-components";

const PlantFormStyled = styled.form`
  gap: 20px;
  font-size: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 auto;
  font-weight: 400;

  .add-form-control {
    &__checkbox {
      width: 25px;
      height: 25px;
    }
    &__label {
      font-weight: 700;
    }

    &__has-flowers {
      width: 260px;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    &__input {
      margin-top: 10px;
      padding: 10px;
      border-radius: 15px;
      border: 2px solid ${(props) => props.theme.colors.primary};
      width: 267px;
    }

    &__description {
      margin-top: 10px;
      padding: 10px;
      border-radius: 15px;
      border: 2px solid ${(props) => props.theme.colors.primary};
      width: 267px;
      height: 110px;
    }
    &__environment {
      font-weight: 700;
      width: 260px;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    &__select {
      padding: 10px;
      border-radius: 15px;
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  }
  .add-form__button {
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px;
    border-radius: 15px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: white;
    width: 145px;
    font-weight: bold;
    font-size: 15px;

    :disabled {
      background-color: ${(props) => props.theme.colors.secondary};
      border: 2px solid ${(props) => props.theme.colors.secondary};
    }
  }
`;
export default PlantFormStyled;
