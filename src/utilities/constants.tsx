import { IButtonType, IConst, EHoldTypes } from "./interfaces";

export const constants: IConst = {
  sizeX: 400,
  sizeY: 300,
  radius: 10
};

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
    name: EHoldTypes.RESET,
    label: "Reset"
  },
  {
    name: EHoldTypes.SAVE,
    label: "Zapisz"
  }
];
