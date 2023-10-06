import App from "./app";
import React from "react";
import ReactDOM from "react-dom/client";
import DeviceContextProvider from "./context/device.context";

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <DeviceContextProvider>
      <App />
    </DeviceContextProvider>
  </React.StrictMode>
);
