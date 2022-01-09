import { AppError, HistoricalBoulders, HoldState, LoggedUser, Problem } from ".";

export type EGrade = 0 | 1 | 2 | 3 | 4 | 5;

export enum EProblemType {
  BOULDER = "boulder",
  CIRCUIT = "circuit",
}

export interface IStateProps {
    boulder: Problem;
    historicalBoulders: HistoricalBoulders;
    currentHold: HoldState;
    appError: AppError;
    loggedUser: LoggedUser;
  }

  export interface IDoneBy {
    userUid: string;
    date: number;
  }