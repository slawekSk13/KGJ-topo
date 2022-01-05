import { EButtonTypes, IButtonType } from "../components/Button/ButtonTypes";
import { EHoldTypes } from "../components/Hold/HoldTypes";
import { IConst } from "./types";

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
    name: EButtonTypes.RESET,
    label: "Reset"
  },
  {
    name: EButtonTypes.SAVE,
    label: "Zapisz"
  }
];
