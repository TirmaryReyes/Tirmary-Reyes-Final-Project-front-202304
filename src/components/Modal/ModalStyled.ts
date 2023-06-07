import styled from "styled-components";

export const ModalStyled = styled.div`
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 260px;
    height: 350px;
    border-radius: 15px;
    position: relative;
    gap: 20px;

    &--error {
      border: 2px solid #ff0000;
    }

    &--success {
      border: 2px solid ${(props) => props.theme.colors.primary};
    }

    &__message {
      color: #000;
      font-weight: bold;
      font-size: 15px;
      padding: 10px;
    }

    &__button {
      width: 145px;
      height: 39px;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 15px;
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;
