import { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { IHoldsMapProps, IHold } from "../../utilities/interfaces";
import { handleNewHold } from "../../utilities/helpers";

import { constants } from "../../utilities/constants";
import { Hold } from "../Hold/Hold";
export const HoldsMap = observer(
  ({ boulder, currentHold }: IHoldsMapProps): ReactElement => {
    const handleMapClick = (e: { clientX: number; clientY: number }) => {
      currentHold && boulder.setHolds(
        handleNewHold(e, boulder.getHolds(), currentHold.getHold())
      );
    };
    return (
      <svg
        viewBox={`0 0 ${constants.sizeX} ${constants.sizeY}`}
        onClick={handleMapClick}
        id="target"
      >
        {boulder.getHolds().map((boulderHold: IHold, i: number) => (
          <Hold key={i} boulderHold={boulderHold} />
        ))}
      </svg>
    );
  }
);
