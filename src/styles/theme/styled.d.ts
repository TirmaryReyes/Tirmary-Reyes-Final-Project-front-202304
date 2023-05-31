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
      regular: number;
      medium: number;
      bold: number;
    };

    spacing: {
      medium: string;
    };
  }
}

export default DefaultTheme;
