import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import { RecoilRoot } from "recoil";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalFont from "./styles/GlobalFont.ts";
import GlobalStyle from "./styles/GlobalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </RecoilRoot>
);
