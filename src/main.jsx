// First, we import the React library. This is necessary for using React's features, like components and JSX.
import React from "react";

// Import ReactDOM from 'react-dom/client', a package that allows us to interact with the DOM.
// This is a newer, more efficient way to work with React 18 and beyond for rendering our React app in the browser.
import ReactDOM from "react-dom/client";

// Import the App component from the App.jsx file. This is the root component of our application.
import App from "./App.jsx";

// Import the main stylesheet for the application. This applies global styles.
import "./index.css";

// Use ReactDOM to select the 'root' DOM node and create a React root on it.
// This is where our React app will "live" in the HTML document.
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode is a tool for highlighting potential problems in an app.
  // It doesn't render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App /> {/* Here we render the App component inside our React root. */}
  </React.StrictMode>
);

// Why use <React.StrictMode>?
// - It helps identify unsafe lifecycles, legacy API usage, and other potential issues before they lead to bigger problems.
// - It does not affect the production build; it's a tool for development mode to improve code quality.
// Think of it like having an extra set of eyes reviewing your code to catch common mistakes.
