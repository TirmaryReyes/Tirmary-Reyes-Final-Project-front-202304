import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  gap: 20px;

  .page-not-found {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: 50px;

    &__message {
      text-align: center;
    }

    &__image {
      margin-top: 50px;
    }
  }
`;

export default NotFoundPageStyled;
