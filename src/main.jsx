import React from "react";
import ReactDOM from "react-dom/client";

// add {} because of remobing "export default App;" in App.jsx
import { App } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);