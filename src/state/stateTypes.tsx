import { AllUsers } from "./AllUsers";
import { AppMessage } from "./AppMessage";
import { HistoricalBoulders } from "./HistoricalBoulders";
import { HoldState } from "./HoldState";
import { Loading } from "./Loading";
import { LoggedUser } from "./LoggedUser";
import { Boulder } from "./Boulder";
import { Maps } from "./Maps";

export type EGrade = 0 | 1 | 2 | 3 | 4 | 5;

export enum EBoulderType {
  BOULDER = "boulder",
  CIRCUIT = "circuit",
}

export interface IStateProps {
  boulder: Boulder;
  historicalBoulders: HistoricalBoulders;
  currentHold: HoldState;
  appMessage: AppMessage;
  loggedUser: LoggedUser;
  allUsers: AllUsers;
  loading: Loading;
  maps: Maps;
}

export interface IDoneBy {
  userUid: string;
  date: number;
}

export interface IMap {
  radius: number;
  sizeX: number;
  sizeY: number;
  uid: string;
  url: string;
}
