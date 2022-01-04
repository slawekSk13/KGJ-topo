import { Button } from "../Button/Button";
import { IButtonType, IButtonsGroupProps } from "../../utilities/interfaces";
import { ReactElement, useContext } from "react";
import { observer } from "mobx-react-lite";
import { StateContext } from "../../state/context";

export const ButtonsGroup = observer(
  ({ buttonsArray }: IButtonsGroupProps): ReactElement => {
    const { boulder, currentHold, appError } = useContext(StateContext);

    return (
      <div className="tooltip">
        <div className="buttons-group">
          {buttonsArray.map((buttonType: IButtonType) => {
            const { name, label } = buttonType;
            return <Button key={name} name={name} label={label} />;
          })}
        </div>
        {appError.checkCode("holds") && (
          <span
            className="tooltip-text tooltip-text__bottom clickable"
            onClick={() => appError.removeCode("holds")}
          >
            1-2 chwyty na start, 1 top i coś pośrodku
          </span>
        )}
      </div>
    );
  }
);
