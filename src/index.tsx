import "./styles.css";
import { render } from "react-dom";
import { App } from "./App";
import { StateContext } from "./state/context";
import { appError, boulder, currentHold } from "./state";

const rootElement = document.getElementById("root");
render(
  <StateContext.Provider value={{boulder, currentHold, appError}}>
  <App />
  </StateContext.Provider>,
  rootElement
);
