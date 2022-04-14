import React from "react";
import MiULibrary from "./MiULibrary";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MiULibrary />);
