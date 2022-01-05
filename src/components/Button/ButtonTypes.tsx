import { EHoldTypes } from "../Hold/HoldTypes";

export enum EButtonTypes {
  RESET = "reset",
  SAVE = "save",
}
  
  export interface IButtonType {
    name: EButtonTypes | EHoldTypes;
    label: string;
  }