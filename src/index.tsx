import React from "react";
import ReactDOM from "react-dom/client";
import {AppProvider } from "./context/AppContext";
import { PrincipalLayout } from "./Layout/PrincipalLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <PrincipalLayout />
    </AppProvider>
  </React.StrictMode>
);
