import { createContext } from "react";
import { appError, boulder, currentHold } from "../state";
import { IStateProps } from "./stateTypes";
export const StateContext = createContext<IStateProps>({
  boulder,
  currentHold,
  appError
});
