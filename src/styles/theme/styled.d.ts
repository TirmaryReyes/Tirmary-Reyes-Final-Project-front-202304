import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      primaryLight: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      medium: string;
      big: string;
    };

    fontWeigth: {
      ligth: string;
      regular: string;
      medium: string;
      bold: string;
    };

    spacing: {
      medium: string;
    };
  }
}

export default DefaultTheme;
