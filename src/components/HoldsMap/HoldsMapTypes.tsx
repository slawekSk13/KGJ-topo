import { MouseEventHandler } from "react";
import { Boulder } from "../../state/Problem";

export interface IHoldsMapProps {
    boulder: Boulder;
    handleMapClick?: MouseEventHandler;
  }