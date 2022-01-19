import { EButtonTypes, IButtonType } from "../components/Button/ButtonTypes";
import { EHoldTypes } from "../components/Hold/HoldTypes";
import { IConst, IFirebaseReturn, IUserReturn } from "./types";

export const noErrorDataObject: IFirebaseReturn = {data: [], error: false, code: ''}
export const noErrorUserObject: IUserReturn = {user: null, error: false, code: ''}

export const buttonsArray: IButtonType[] = [
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
  },
  {
    name: EButtonTypes.RESET,
    label: "Reset"
  },
  {
    name: EButtonTypes.SAVE,
    label: "Zapisz"
  }
];
