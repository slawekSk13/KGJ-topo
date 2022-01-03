import { ReactElement } from "react";
import { constants } from "../../utilities/constants";
import { IHoldProps } from "../../utilities/interfaces";
export const Hold = ({ boulderHold, index }: IHoldProps): ReactElement => {
  const { x, y, holdType } = boulderHold;
  return (
    <g>
      <circle className={holdType} cx={x} cy={y} r={constants.radius} />
      {index && (
        <text
          className={`${holdType} circuit-number`}
          x={x}
          y={y}
          textAnchor='middle'
          dy={'5'}
        >
          {index}
        </text>
      )}
    </g>
  );
};
