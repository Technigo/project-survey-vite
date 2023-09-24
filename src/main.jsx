import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; // Correct the import path for App component
import "./index.css"; // Correct the import path for CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
