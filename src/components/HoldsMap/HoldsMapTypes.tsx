import { MouseEventHandler } from "react";
import { Problem } from "../../state/Problem";

export interface IHoldsMapProps {
    boulder: Problem;
    handleMapClick?: MouseEventHandler;
  }