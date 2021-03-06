import { Boulder } from "../state/Boulder";
import { User } from "firebase/auth";
import { HoldState } from "../state/HoldState";
import { AppMessage } from "../state/AppMessage";
import { IMap } from "../state/stateTypes";

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

export type voidFunc = () => void;
export type TResetNewBoulder = (boulder: Boulder, currentHold: HoldState, appMessage: AppMessage) => void;

export interface IFirebaseReturn {
  data: Boulder[];
  error: boolean;
  code: string;
}

export interface IUsersListReturn {
  data: IUserToSave[];
  error: boolean;
  code: string;
}

export interface IMapsListReturn {
  data: IMap[];
  error: boolean;
  code: string;
}

export interface IUserReturn {
  user: User | null;
  error: boolean;
  code: string;
}

export interface ILoginParameters {
  email: string;
  password: string;
}

export enum EDataTypes {
  BOULDERS = "boulders",
  USERS = "users",
}

export interface IUserToSave {
  uid: string;
  displayName: string | null;
  photoURL: string | null
}