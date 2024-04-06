//styled.d.ts
import "styled-components";
import { ColorsTypes, FontsTypes } from "./theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}
