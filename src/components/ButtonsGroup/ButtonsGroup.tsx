import "./ButtonsGroup.css";
import { Button } from "../Button/Button";
import { IButtonType } from "../Button/ButtonTypes";
import { IButtonsGroupProps } from "./ButtonsGroupTypes";

import { ReactElement } from "react";

export const ButtonsGroup = ({ buttonsArray }: IButtonsGroupProps): ReactElement => {
  return (
      <div className="buttons-group">
        {buttonsArray.map((buttonType: IButtonType) => {
          const { name, label } = buttonType;
          return <Button key={name} name={name} label={label} />;
        })}
      </div>
  );
};
