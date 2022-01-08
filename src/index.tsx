import "./styles.css";
import { render } from "react-dom";
import { App } from "./App";
import { StateContext } from "./state/context";
import { appError, boulder, currentHold, loggedUser } from "./state";

const rootElement = document.getElementById("root");
render(
  <StateContext.Provider value={{boulder, currentHold, appError, loggedUser}}>
  <App />
  </StateContext.Provider>,
  rootElement
);
