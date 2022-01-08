import "./ButtonsGroup.css";
import { Button } from "../Button/Button";
import { IButtonType } from "../Button/ButtonTypes";
import { IButtonsGroupProps } from "./ButtonsGroupTypes";

import { ReactElement, useContext } from "react";
import { observer } from "mobx-react-lite";
import { StateContext } from "../../state/context";
import { TooltipText } from "../TooltipText/TooltipText";

export const ButtonsGroup = observer(
  ({ buttonsArray }: IButtonsGroupProps): ReactElement => {
    const { appError } = useContext(StateContext);
    return (
        <div className="buttons-group">
          {buttonsArray.map((buttonType: IButtonType) => {
            const { name, label } = buttonType;
            return <Button key={name} name={name} label={label} />;
          })}
          { appError.checkCode("holds") && (
          <TooltipText
            className="tooltip-text__top clickable"
            text="1-2 chwyty na start, 1 top i coś pośrodku"
            onClick={() => appError.removeCode("holds")}
          />
        )}
        </div>
    );
  }
);
