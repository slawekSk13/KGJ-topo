import "./styles.css";
import { render } from "react-dom";
import { App } from "./App";
import { StateContext } from "./state/context";
import {
  allUsers,
  appMessage,
  boulder,
  currentHold,
  historicalBoulders,
  loading,
  loggedUser,
  maps,
} from "./state";

const rootElement = document.getElementById("root");
render(
  <StateContext.Provider
    value={{
      boulder,
      historicalBoulders,
      currentHold,
      appMessage,
      loggedUser,
      allUsers,
      loading,
      maps,
    }}
  >
    <App />
  </StateContext.Provider>,
  rootElement
);
