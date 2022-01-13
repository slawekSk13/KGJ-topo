import { MouseEventHandler } from "react";
import { Boulder } from "../../state/Boulder";

export interface IHoldsMapProps {
    boulder: Boulder;
    handleMapClick?: MouseEventHandler;
  }