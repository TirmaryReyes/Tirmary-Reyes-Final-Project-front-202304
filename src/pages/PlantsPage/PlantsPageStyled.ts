import styled from "styled-components";

const PlantsListStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};

  .list-title {
    margin-top: 20px;
    font-weight: bold;
    width: 230px;
    display: inline-block;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
export default PlantsListStyled;
