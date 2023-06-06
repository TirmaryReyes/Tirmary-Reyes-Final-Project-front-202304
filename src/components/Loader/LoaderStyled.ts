import styled from "styled-components";

const LoaderStyled = styled.div`
  .custom-loader {
    width: 50px;
    height: 50px;
    display: grid;
  }
  .custom-loader::before,
  .custom-loader::after {
    content: "";
    grid-area: 1/1;
    --c: radial-gradient(farthest-side, #215e02 92%, #0000);
    background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
      var(--c) 0 50%;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    animation: s2 1s infinite;
  }
  .custom-loader::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear;
  }

  @keyframes s2 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

export default LoaderStyled;
