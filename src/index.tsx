import { createRoot } from "react-dom/client";
import { Router } from "elum-router/react";

import Layout from "layout";

import "./styles.css";

document.addEventListener("contextmenu", (e) => e.preventDefault());

const app = document.getElementById("app") as HTMLElement;
const root = createRoot(app);

root.render(
  <Router branch="startup">
    <Layout />
  </Router>
);
