import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            Blue50: string;
            Blue100: string;
            Blue200: string;
            Blue300: string;
            Blue400: string;
            Blue500: string;
            Blue600: string;
            Blue700: string;
            Blue800: string;
            Blue900: string;
            Grey50: string;
            Grey100: string;
            Grey200: string;
            Grey300: string;
            Grey400: string;
            Grey500: string;
            Grey600: string;
            Grey700: string;
            Grey800: string;
            Grey900: string;
            white50: string;
          },
          mediaSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
          }
    }
}