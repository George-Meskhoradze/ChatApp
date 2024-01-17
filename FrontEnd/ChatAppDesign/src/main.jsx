import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Auth from "./Authorization";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  </React.StrictMode>
);
