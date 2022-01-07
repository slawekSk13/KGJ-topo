import { ReactElement } from "react";

export interface IMenuWrapperProps {
  children: ReactElement;
  side: ESide;
}

export enum ESide {
  LEFT = "left",
  RIGHT = "right",
}
