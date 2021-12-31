import { HoldState, Problem } from "../state";

export interface IHold {
  x: number;
  y: number;
  holdType: EHoldTypes;
}

export interface IConst {
  sizeX: number;
  sizeY: number;
  radius: number;
}

export interface IElementSize {
  top: number;
  left: number;
  width: number;
  height: number;
}

export enum EHoldTypes {
  HOLD = "hold",
  START = "start",
  TOP = "top",
  FOOT = "foot",
  RESET = "reset"
}

export interface IButtonType {
  name: EHoldTypes;
  label: string;
}

export interface IButtonsGroupProps {
  buttonsArray: IButtonType[];
}

export interface IHoldsMapProps {
  boulder: Problem;
  currentHold?: HoldState;
}

export interface IHoldProps {
boulderHold: IHold;
}

export type EGrade = 0 | 1 | 2 | 3 | 4 | 5;
