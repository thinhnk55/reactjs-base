import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./services/i18n/index.ts";
import I18nDemo from "./samples/I18nDemo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nDemo />
  </StrictMode>
);
