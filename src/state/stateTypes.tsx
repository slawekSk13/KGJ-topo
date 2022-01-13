import { AllUsers } from "./AllUsers";
import { AppError } from "./AppError";
import { HistoricalBoulders } from "./HistoricalBoulders";
import { HoldState } from "./HoldState";
import { Loading } from "./Loading";
import { LoggedUser } from "./LoggedUser";
import { Boulder } from "./Boulder";

export type EGrade = 0 | 1 | 2 | 3 | 4 | 5;

export enum EBoulderType {
  BOULDER = "boulder",
  CIRCUIT = "circuit",
}

export interface IStateProps {
  boulder: Boulder;
  historicalBoulders: HistoricalBoulders;
  currentHold: HoldState;
  appError: AppError;
  loggedUser: LoggedUser;
  allUsers: AllUsers;
  loading: Loading;
}

export interface IDoneBy {
  userUid: string;
  date: number;
}
