import { render } from "react-dom";
import { boulder, currentHold } from "./state";

import { App } from "./App";

const rootElement = document.getElementById("root");
render(
  <App boulder={boulder} currentHold={currentHold} />,
  rootElement as HTMLDivElement
);
