import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MovingDot from "./App";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MovingDot />
  </StrictMode>
);
