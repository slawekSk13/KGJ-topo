import "./HoldsMap.css";

import { observer } from "mobx-react-lite";
import { constants } from "../../utilities/constants";
import { Hold } from "../Hold/Hold";
import { IHold } from "../Hold/HoldTypes";
import { IHoldsMapProps } from "./HoldsMapTypes";
import { EBoulderType } from "../../state/stateTypes";

export const HoldsMap = observer(
  ({ boulder, handleMapClick }: IHoldsMapProps) => {
    return (
      <svg
        className={handleMapClick ? "holds-map clickable" : "holds-map"}
        viewBox={`0 0 ${constants.sizeX} ${constants.sizeY}`}
        onClick={handleMapClick}
        id="holdsMap"
      >
        {boulder.boulderHolds.map((boulderHold: IHold, i: number) => (
          <Hold
            key={i}
            boulderHold={boulderHold}
            index={boulder.type === EBoulderType.CIRCUIT && i + 1}
          />
        ))}
      </svg>
    );
  }
);
