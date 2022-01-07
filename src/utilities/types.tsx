import { Problem } from "../state";
import { User } from "firebase/auth";

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

export interface IFirebaseReturn {
  data: Problem[];
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