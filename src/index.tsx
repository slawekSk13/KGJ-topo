import "./styles.css";
import { render } from "react-dom";
import { App } from "./App";
import { StateContext } from "./state/context";
import {
  allUsers,
  appError,
  boulder,
  currentHold,
  historicalBoulders,
  loggedUser,
} from "./state";

const rootElement = document.getElementById("root");
render(
  <StateContext.Provider
    value={{
      boulder,
      historicalBoulders,
      currentHold,
      appError,
      loggedUser,
      allUsers
    }}
  >
    <App />
  </StateContext.Provider>,
  rootElement
);
