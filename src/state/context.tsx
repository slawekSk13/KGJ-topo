import { createContext } from "react";
import {
  appMessage,
  boulder,
  historicalBoulders,
  currentHold,
  loggedUser,
  allUsers,
  loading,
  maps
} from "../state";
import { IStateProps } from "./stateTypes";
export const StateContext = createContext<IStateProps>({
  boulder,
  historicalBoulders,
  currentHold,
  appMessage,
  loggedUser,
  allUsers,
  loading,
  maps
});
