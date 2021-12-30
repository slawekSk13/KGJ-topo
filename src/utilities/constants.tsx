import { ButtonType, Const, HoldTypes } from "./interfaces";

export const constants: Const = {
  sizeX: 400,
  sizeY: 300,
  radius: 10
};

export const buttonsArray: ButtonType[] = [
  {
    name: HoldTypes.START,
    label: "Start"
  },
  {
    name: HoldTypes.HOLD,
    label: "Chwyt"
  },
  {
    name: HoldTypes.TOP,
    label: "Top"
  },
  {
    name: HoldTypes.FOOT,
    label: "Stopień"
  },
  {
    name: HoldTypes.RESET,
    label: "Reset"
  }
];
