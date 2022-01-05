import "./HoldsMap.css";

import { observer } from "mobx-react-lite";
import { constants } from "../../utilities/constants";
import { Hold } from "../Hold/Hold";
import { IHold } from "../Hold/HoldTypes";
import { IHoldsMapProps } from "./HoldsMapTypes";
import { EProblemType } from "../../state/stateTypes";

export const HoldsMap = observer(
  ({ boulder, handleMapClick }: IHoldsMapProps) => {
    return (
      <svg
        className="holds-map clickable"
        viewBox={`0 0 ${constants.sizeX} ${constants.sizeY}`}
        onClick={handleMapClick}
        id="holdsMap"
      >
        {boulder.boulderHolds.map((boulderHold: IHold, i: number) => (
          <Hold
            key={i}
            boulderHold={boulderHold}
            index={boulder.type === EProblemType.CIRCUIT && i + 1}
          />
        ))}
      </svg>
    );
  }
);
