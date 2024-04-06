import { createGlobalStyle } from "styled-components";

const GlobalFont = createGlobalStyle`    
  @font-face {
    font-family: "Pretendard";
    src: url("../../public/assets/PretendardVariable.woff2") format('woff2'); 
  }
  @font-face {
    font-family: "SUIT";
    src: url("../../public/assets/SUIT-Variable") format('woff2'); 
  }
`;

export default GlobalFont;
