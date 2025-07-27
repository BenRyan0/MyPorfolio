import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            background: "#27272A",
            color: "white",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
