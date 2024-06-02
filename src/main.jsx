import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ReactLenis from "@studio-freight/react-lenis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactLenis root options={{ duration: 5, smoothWheel: true }}>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </React.StrictMode>
);
