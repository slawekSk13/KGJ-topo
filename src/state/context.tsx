import { createContext } from "react";
import { appError, boulder, historicalBoulders, currentHold, loggedUser } from "../state";
import { IStateProps } from "./stateTypes";
export const StateContext = createContext<IStateProps>({
  boulder,
  historicalBoulders,
  currentHold,
  appError,
  loggedUser
});
