import { AppError, HoldState, Problem } from ".";

export type EGrade = 0 | 1 | 2 | 3 | 4 | 5;

export enum EProblemType {
  BOULDER = "boulder",
  CIRCUIT = "circuit",
}

export interface IStateProps {
    boulder: Problem;
    currentHold?: HoldState;
    appError: AppError;
  }