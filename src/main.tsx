import App from "./app";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import DeviceContextProvider from "./context/device.context";
import { MUI_OVERRIDES } from "./styles/mui-overrides.style";
import { EnvironmentManager } from "./utilities/environment.utility";

EnvironmentManager.validate();

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={MUI_OVERRIDES}>
      <DeviceContextProvider>
        <App />
      </DeviceContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
