import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: "Montserrat";
  
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font: inherit;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
}

input, textarea {
  font: inherit;
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyle;
