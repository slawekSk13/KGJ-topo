import { MouseEventHandler } from "react";
import { Problem } from "../../state";

export interface IHoldsMapProps {
    boulder: Problem;
    handleMapClick?: MouseEventHandler;
  }