import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

// material component: https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=9C27B0&secondary.color=F44336
const myTheme = createMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider theme={myTheme}>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
