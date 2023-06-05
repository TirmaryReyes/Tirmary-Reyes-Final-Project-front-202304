import styled from "styled-components";

const PlantsListStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 0px;
  gap: 60px;
  color: ${(props) => props.theme.colors.primary};

  .list-title {
    font-weight: bold;
    width: 230px;
    display: inline-block;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
export default PlantsListStyled;
