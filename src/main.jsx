import React from "react";
import { createRoot } from "react-dom";
import App from "./App"; // Import the default export of App.jsx

import "./index.css";

const root = document.getElementById("root");
const rootRender = createRoot(root);

rootRender.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
