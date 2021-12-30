import { HoldState, Problem } from "../state";

export interface Hold {
  x: number;
  y: number;
  holdType: HoldTypes;
}

export interface Const {
  sizeX: number;
  sizeY: number;
  radius: number;
}

export interface ElementSize {
  top: number;
  left: number;
  width: number;
  height: number;
}

export enum HoldTypes {
  HOLD = "hold",
  START = "start",
  TOP = "top",
  FOOT = "foot",
  RESET = "reset"
}

export interface ButtonType {
  name: HoldTypes;
  label: string;
}

export interface ButtonsGroupProps {
  buttonsArray: ButtonType[];
}

export interface StateProps {
  boulder: Problem;
  currentHold: HoldState;
}

export type grade = 0 | 1 | 2 | 3 | 4 | 5;
