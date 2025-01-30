import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Provider from "./ContextHook/Provider";
import AnimatedBg from "./components/ParticleBg/AnimatedBg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      {/* <AnimatedBg /> */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
