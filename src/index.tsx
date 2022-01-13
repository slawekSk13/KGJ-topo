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
  loading,
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
      allUsers,
      loading
    }}
  >
    <App />
  </StateContext.Provider>,
  rootElement
);
