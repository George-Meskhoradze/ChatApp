import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Auth from "./components/Authorization";
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth />
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
