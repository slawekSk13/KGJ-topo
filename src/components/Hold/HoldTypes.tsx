export enum EHoldTypes {
  HOLD = "hold",
  START = "start",
  TOP = "top",
  FOOT = "foot",
}
export interface IHold {
  x: number;
  y: number;
  holdType: EHoldTypes;
}
export interface IHoldProps {
  boulderHold: IHold;
  index: number | false;
}