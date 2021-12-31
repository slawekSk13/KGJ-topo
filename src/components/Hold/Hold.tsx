import { ReactElement } from "react";
import { constants } from "../../utilities/constants";
import { IHoldProps } from "../../utilities/interfaces";
export const Hold = ({boulderHold}: IHoldProps): ReactElement => {
    const {x, y, holdType} = boulderHold;
    return (<circle className={holdType}
        cx={x}
        cy={y}
        r={constants.radius}/>)
}