import "./Hold.css";
import { ReactElement } from "react";
import { IHoldProps } from "./HoldTypes";
export const Hold = ({ boulderHold, index, radius }: IHoldProps): ReactElement => {
  const { x, y, holdType } = boulderHold;
  return (
    <g>
      <circle
        className={`circle circle__${holdType}`}
        cx={x}
        cy={y}
        r={radius}
      />
      {index && (
        <text
          className={`${holdType} circuit-number`}
          x={x}
          y={y}
          textAnchor="middle"
          dy={"5"}
        >
          {index}
        </text>
      )}
    </g>
  );
};
