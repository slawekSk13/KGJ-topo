import "./HoldsMap.css";

import { observer } from "mobx-react-lite";
import { Hold } from "../Hold/Hold";
import { IHold } from "../Hold/HoldTypes";
import { IHoldsMapProps } from "./HoldsMapTypes";
import { EBoulderType } from "../../state/stateTypes";
import { useContext } from "react";
import { StateContext } from "../../state/context";

export const HoldsMap = observer(
  ({ boulder, handleMapClick }: IHoldsMapProps) => {
    const { maps, currentHold } = useContext(StateContext);
    return maps.getMaps().length > 0 ? (
      <svg
        className={handleMapClick ? `holds-map holds-map-${currentHold.getHold()}` : "holds-map"}
        viewBox={`0 0 ${maps.getMap(boulder.getMap()).sizeX} ${
          maps.getMap(boulder.getMap()).sizeY
        }`}
        onClick={handleMapClick}
        id="holdsMap"
        style={{backgroundImage: `url(${maps.getMap(boulder.getMap()).url})`}}
      >
        {boulder.boulderHolds.map((boulderHold: IHold, i: number) => (
          <Hold
            key={i}
            boulderHold={boulderHold}
            index={boulder.type === EBoulderType.CIRCUIT && i + 1}
            radius={maps.getMap(boulder.getMap()).radius}
          />
        ))}
      </svg>
    ) : null;
  }
);
