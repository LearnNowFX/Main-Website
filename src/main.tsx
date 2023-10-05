import React from "react";
import App from "./app.tsx";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
