import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      accent: string;
      primary: string;
      secondary: string;

      background: string;
      text: string;
      placeholderText: string;
      error: string;
    };
  }
}
