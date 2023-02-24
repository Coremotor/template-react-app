import React from "react";
import ReactDOM from "react-dom/client";
import InitApp from "app/app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <InitApp />
    </BrowserRouter>
  </React.StrictMode>
);
