import { MouseEventHandler } from "react";
import { HoldState, Problem, AppError } from "../state";

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

export interface ITooltipTextProps {
  onClick?: voidFunc;
  className: string;
  text: string;
}

export enum EHoldTypes {
  HOLD = "hold",
  START = "start",
  TOP = "top",
  FOOT = "foot",
  RESET = "reset",
  SAVE = "save",
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
  handleMapClick?: MouseEventHandler;
}

export interface IStateProps {
  boulder: Problem;
  currentHold?: HoldState;
  appError: AppError;
}

export interface IHoldProps {
  boulderHold: IHold;
  index: number | false;
}

export type EGrade = 0 | 1 | 2 | 3 | 4 | 5;

export enum EProblemType {
  BOULDER = "boulder",
  CIRCUIT = "circuit",
}

export type voidFunc = () => void;
