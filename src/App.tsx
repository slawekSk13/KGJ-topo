import "./styles.css";
import { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { Hold, StateProps } from "./utilities/interfaces";
import { handleNewHold } from "./utilities/helpers";
import { constants, buttonsArray } from "./utilities/constants";
import { ButtonsGroup } from "./components/ButtonsGroup/ButtonsGroup";

export const App = observer(
  ({ boulder, currentHold }: StateProps): ReactElement => {
    const handleMapClick = (e: { clientX: number; clientY: number }) => {
      boulder.setHolds(
        handleNewHold(e, boulder.boulderHolds, currentHold.getHold())
      );
    };

    return (
      <>
        <ButtonsGroup buttonsArray={buttonsArray} />
        <svg
          viewBox={`0 0 ${constants.sizeX} ${constants.sizeY}`}
          onClick={handleMapClick}
          id="target"
        >
          {boulder.boulderHolds.map((boulderHold: Hold, i: number) => {
            const { x, y } = boulderHold;
            return (
              <circle
                className={boulderHold.holdType}
                key={i}
                cx={x}
                cy={y}
                r={constants.radius}
              />
            );
          })}
        </svg>
      </>
    );
  }
);
