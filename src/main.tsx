import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./services/i18n/index.ts";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
    <ToastContainer />
  </StrictMode>
);
