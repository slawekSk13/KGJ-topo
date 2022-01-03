import { createContext } from "react";
import { boulder, currentHold } from "../state";
import { IStateProps } from "../utilities/interfaces";
export const StateContext = createContext<IStateProps>({
  boulder,
  currentHold,
});
