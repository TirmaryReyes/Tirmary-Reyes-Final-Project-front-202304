import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(228 234 228 / 78%);

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
