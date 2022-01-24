import { EHoldTypes } from "../components/Hold/HoldTypes";
import { IHoldButton } from "../components/HoldButton/HoldButtonTypes";
import { IFirebaseReturn, IUserReturn } from "./types";

export const noErrorDataObject: IFirebaseReturn = {data: [], error: false, code: ''}
export const noErrorUserObject: IUserReturn = {user: null, error: false, code: ''}

export const holdSwitchButtons: IHoldButton[] = [
  {
    name: EHoldTypes.START,
    label: "Start"
  },
  {
    name: EHoldTypes.HOLD,
    label: "Chwyt"
  },
  {
    name: EHoldTypes.TOP,
    label: "Top"
  },
  {
    name: EHoldTypes.FOOT,
    label: "Stopień"
  }
];
