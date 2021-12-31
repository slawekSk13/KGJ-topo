import { Button } from "../Button/Button";
import { IButtonType, IButtonsGroupProps } from "../../utilities/interfaces";
import { ReactElement } from "react";

export const ButtonsGroup = ({
  buttonsArray
}: IButtonsGroupProps): ReactElement => {
  return (
    <div className="buttonsGroup">
      {buttonsArray.map((buttonType: IButtonType) => {
        const { name, label } = buttonType;
        return <Button key={name} name={name} label={label} />;
      })}
    </div>
  );
};
