import styled from "styled-components";

const PlantsListStyled = styled.main`
  padding: 20px 20px 0px 0px;
  gap: 60px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;

  .list-title {
    width: 220px;
    display: inline-block;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
export default PlantsListStyled;
