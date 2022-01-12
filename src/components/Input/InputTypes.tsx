import { ReactElement } from "react";

export interface IInput {
  onChange: (e: IChange)=> void;
  value: string;
  type: EInputTypes;
  placeholder: string;
  name: string;
  children?: ReactElement | null;
}

export enum EInputTypes {
  EMAIL = "email",
  TEXT = "text",
  PASSWORD = "password",
}

export interface IChange {
  target: { value: string };
}
