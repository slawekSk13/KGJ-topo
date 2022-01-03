import "./styles.css";
import { render } from "react-dom";
import { App } from "./App";
import { StateContext } from "./state/context";
import { boulder, currentHold } from "./state";

const rootElement = document.getElementById("root");
render(
  <StateContext.Provider value={{boulder, currentHold}}>
  <App />
  </StateContext.Provider>,
  rootElement
);
