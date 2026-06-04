import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app.jsx"; // <-- Alterado de './App.jsx' para './app.jsx'
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  